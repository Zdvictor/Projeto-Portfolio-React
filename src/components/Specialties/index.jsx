import {useEffect, useState, useRef } from "react"


//IMG
import front from "../../assets/foto-front.png"
import back from "../../assets/foto-back.png"


export default function Specialties() {
    const [showAnimation, setShowAnimation] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((observe) => {

            const isEntered = observe[0].isIntersecting
            
            if(isEntered) {
                setShowAnimation(true)
            }

            return
            
        })

        observer.observe(elementRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])



    return (
        <div id="especialidades">
            <section ref={elementRef} className="flex flex-col gap-y-32 mt-36 p-5">
                <h2 className="text-center text-3xl font-bold">
                    MINHAS <span className="text-customGreen">ESPECIALIDADES</span>
                </h2>

                    {showAnimation && (

                        <article className="flex-col md:flex-row flex items-center justify-evenly animate-enter  ">
                            <img src={front} alt="foto-front-end" />
                            <img src={back} alt="foto-back-end" className="md:-mt-5 md:mr-14"/>
                        </article>

                    )}

            
            </section>
        </div>
    )
}
