import { useRef, } from "react";

//TYPEWRITER
import {useTypewriter} from "react-simple-typewriter"



export default function Experience() {


    const elementRef = useRef(null)


    const [text] = useTypewriter({
        words: [
          `Atualmente, estou trabalhando como freelancer há 7 meses e utilizo as seguintes tecnologias: \n
          Front-end: HTML, CSS, JavaScript, React.js, Next.js, Vue, Figma \n
          Back-end: Node.js, Express, NestJS, MySQL, MongoDB, Jest, Firebase`,
        ],
      });



      

    return (

        <div id="experiencia" className="container mx-auto mt-52 p-5">

            <section ref={elementRef} className="flex flex-col  gap-y-16 text-center">

                <h3 className="text-customBlue text-3xl font-bold">EXPERIÊNCIA</h3>

                <article className="text-2xl whitespace-pre-line">

                    <p> 
                        {text}
                    </p>

                </article>

            </section>
            
        </div>

    )

}
