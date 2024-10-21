import { useState} from "react";


//Icons
import { FaRegFolder } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

//Projects
import { projects as initialProject } from "./Projects";

//CSS
import "./home.css";

//IMG
import img from "../../assets/foto-perfil.png";


export default function Home() {

    const [openDescription, setOpenDescription] = useState(false);
    const [valueOpen, setValueOpen] = useState(null);
    const [oldProject, setOldProject] = useState([]);
    const [projects, setProjects] = useState(initialProject);
  
    function handleDescription(id) {
      if (openDescription) {
        setProjects(oldProject);
      }
  
      if (!openDescription) {
        var arrayOld = [...projects];
  
        setOldProject(arrayOld);
  
        var newProject = projects.filter((proj) => proj.id == id);
  
        setProjects(newProject);
      }
  
      setOpenDescription(!openDescription);
  
      setValueOpen(id);
    }


    return (

    <article id="home" className="main">
        <section className="main-img">
          <img src={img} alt="img-victor" />
        </section>

        <section className="main-text">
          <h2>Olá, meu nome é Victor</h2>
          <p>
            A tecnologia sempre despertou meu interesse desde a infância, e foi
            essa paixão que me fez seguir uma carreira como Desenvolvedor Web
            Full Stack, onde transformo ideias em realidade através da
            programação.
          </p>

          <hr />

          <div className="projetos">
            <h1>TOP PROJECTS </h1>

            <div className="project">
              {projects.map((project) => {
                return (
                  <ul
                    className={
                      !openDescription ? "project-list" : "project-listOpen"
                    }
                    key={project.id}
                  >
                    {!openDescription && (
                      <>
                        <FaRegFolder
                          style={{ minWidth: 50 }}
                          size={50}
                          color=""
                        />
                        <li style={{ minWidth: 50 }}>{project.name}</li>
                      </>
                    )}

                    <button onClick={() => handleDescription(project.id)}>
                      {openDescription && project.id == valueOpen ? (
                        <FaChevronUp style={{ minWidth: 50 }} size={50} />
                      ) : (
                        <FaChevronDown style={{ minWidth: 50 }} size={50} />
                      )}
                    </button>

                    {openDescription && project.id == valueOpen && (
                      <>
                        <div>{project.description}</div>
                        <a
                          target="blank"
                          href={project.href}
                          className="btn-project"
                        >
                          Acessar
                        </a>
                      </>
                    )}
                  </ul>
                );
              })}
            </div>
          </div>
        </section>
    </article>


    )

}