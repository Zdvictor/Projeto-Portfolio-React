import { useEffect, useRef, useState, useContext } from "react";
import {useTypewriter} from "react-simple-typewriter"
import { ScrollContext } from "../../contex/scrollContext";
import "./experience.css"



export default function Experience() {

    const elementRef = useRef(null)
    const { id, setId } = useContext(ScrollContext);

    const [text] = useTypewriter({
        words: [
          `Atualmente, estou trabalhando como freelancer há 5 meses e utilizo as seguintes tecnologias: \n
          Front-end: HTML, CSS, JavaScript, React.js, Next.js, Vue, Figma \n
          Back-end: Node.js, Express, NestJS, Fastify, MySQL, MongoDB, Jest`,
        ],
      });



    useEffect(() => {
        
        if(id !== null) {

            if(id == 3) {
               
                setTimeout(() => {elementRef.current.scrollIntoView({behavior: "smooth"})}, 200)

            }

        }


    }, [id])


      

    return (

        <div className="container">

            <section ref={elementRef} className="experience">

                <h3 className="experience-color">EXPERIÊNCIA</h3>

                <article className="experience-text">

                    <p> 
                        {text}
                    </p>

                </article>

            </section>

        </div>

    )

}