import {useEffect, useState, useRef } from "react"

//CSS
import "./specialties.css"

//IMG
import front from "../../assets/foto-front.png"
import back from "../../assets/foto-back.png"


export default function Specialties() {
    const [showAnimation, setShowAnimation] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((observe) => {
            const isEntered = observe[0].isIntersecting
            setShowAnimation(isEntered)
        })

        observer.observe(elementRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])



    return (
        <div id="especialidades">
            <section ref={elementRef} className="specialties">
                <h2 className="specialties">
                    MINHAS <span className="specialties-color">ESPECIALIDADES</span>
                </h2>

                {showAnimation && (
                    <article className="specialties-images">
                        <img src={front} alt="foto-front-end" className="img-1" />
                        <img src={back} alt="foto-back-end" className="img-2" />
                    </article>
                )}
            </section>
        </div>
    )
}
