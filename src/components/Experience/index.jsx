import { useRef, } from "react";

//TYPEWRITER
import {useTypewriter} from "react-simple-typewriter"


import Contact from "../Contact";

//CSS
import "./experience.css"


export default function Experience() {

    const elementRef = useRef(null)


    const [text] = useTypewriter({
        words: [
          `Atualmente, estou trabalhando como freelancer há 5 meses e utilizo as seguintes tecnologias: \n
          Front-end: HTML, CSS, JavaScript, React.js, Next.js, Vue, Figma \n
          Back-end: Node.js, Express, NestJS, Fastify, MySQL, MongoDB, Jest`,
        ],
      });



      

    return (

        <div id="experiencia" className="container">

            <section ref={elementRef} className="experience">

                <h3 className="experience-color">EXPERIÊNCIA</h3>

                <article className="experience-text">

                    <p> 
                        {text}
                    </p>

                </article>

            </section>

            <Contact />
        </div>

    )

}