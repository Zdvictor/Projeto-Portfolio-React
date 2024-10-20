import { useContext, useEffect, useState, useRef } from "react"
import { ScrollContext } from "../../contex/scrollContext"
import front from "../../assets/foto-front.png"
import back from "../../assets/foto-back.png"
import "./specialties.css"

export default function Specialties() {
    const [showAnimation, setShowAnimation] = useState(false)
    const { id, setId } = useContext(ScrollContext)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((observe) => {
            const isEntered = observe[0].isIntersecting
            setShowAnimation(isEntered)
            console.log(id)
        })

        observer.observe(elementRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        if (id !== null && id === 2) {
            setShowAnimation(true)
            setTimeout(() => {
                elementRef.current.scrollIntoView({ behavior: "smooth" })
            }, 200)
        }
    }, [id])

    return (
        <div className="container-1">
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
