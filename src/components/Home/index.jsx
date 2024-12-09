import { useState} from "react";


//Icons
import { FaRegFolder } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

//Projects
import { projects as initialProject } from "./Projects";


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

    <article id="home" className="grid container grid-cols-12 mx-auto gap-4 items-center md:flex-row mt-24">

        <section className="hidden lg:block lg:col-span-6 mx-auto min-h-screen">
          <img src={img} alt="img-victor" />
        </section>

        <section className="text-center col-span-12  lg:col-span-6 lg:text-left">
          <h1 className="text-4xl font-bold">Olá, meu nome é Victor</h1>
          <p className="text-2xl mt-5">
            A tecnologia sempre despertou meu interesse desde a infância, e foi
            essa paixão que me fez seguir uma carreira como Desenvolvedor Web
            Full Stack, onde transformo ideias em realidade através da
            programação.
          </p>

          <div className="border-b border-white mt-10" />
  
          <div className="flex flex-col gap-5 mt-16 p-5">

            <h1 className="text-2xl font-bold text-center">TOP PROJECTS </h1>

            <div>
              {projects.map((project) => {
                return (
                  <ul
                    className={
                      !openDescription ? "w-full p-3 flex justify-between items-center border-b border-white mt-5" : "w-full p-3 flex flex-col justify-between items-center border-b border-white"
                    }
                    key={project.id}
                  >
                    {!openDescription && (
                      <>
                        <FaRegFolder
                          size={50}
                          color=""
                        />
                        <li>{project.name}</li>
                      </>
                    )}

                    <button onClick={() => handleDescription(project.id)}>
                      {openDescription && project.id == valueOpen ? (
                        <FaChevronUp  size={50} />
                      ) : (
                        <FaChevronDown size={50} />
                      )}
                    </button>

                    {openDescription && project.id == valueOpen && (
                      <>
                        <div>{project.description}</div>
                        <a
                          target="blank"
                          href={project.href}
                          className="w-full flex justify-center items-center text-lg font-bold bg-white text-black px-2 py-2 rounded-lg mt-4 hover:bg-gray-200 ease-in duration-300"
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