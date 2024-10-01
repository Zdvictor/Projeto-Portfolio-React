import {useState ,useEffect, useContext, useRef} from "react"
import {ScrollContext} from "../../contex/scrollContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "./Schema/contactSchema"
import { toast } from "react-toastify"
import emailjs  from "emailjs-com"
 
import "./contact.css"
import {FaWhatsapp, FaGithub} from "react-icons/fa"
import {CiLinkedin} from "react-icons/ci"
import {PiReadCvLogo} from "react-icons/pi"
import {ClipLoader} from "react-spinners" 






export default function Contact() {

    const { id } = useContext(ScrollContext)
    const elementRef = useRef(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if(id !== null) {

            if(id == 4) {

                setTimeout(() => {elementRef.current.scrollIntoView({behavior: "smooth"})}, 200)
                

            }

        }

    }, [id])

    const {register,handleSubmit, reset, formState: { errors } } = useForm({


        resolver: zodResolver(contactSchema)


    })

    function onSubmit(e) {

        setLoading(true)

        var formData = {

            name: e.name,
            email: e.email,
            telefone: e.cellphone,
            message: e.message


        }

        emailjs.send(

            "service_2mzmsni",
            "template_fy67dfj",
            formData,
            "zb_tnc_n1f2gbh9m0"


        ).then( () => {

            toast.success("Email Enviado com Sucesso", {
                style: {
                  backgroundColor: "#1C1C1C",
                  color: "black", 
                },
                icon: "✔️", 
                progressStyle: {
                  backgroundColor: "green", 
                },
              });
            console.log("Email Enviado com Sucesso")
            setLoading(false)
            reset()
            

        }).catch(err => {

            console.log("ERRO " + err)
            setLoading(false)
            reset()

        }) 
        

    }

    return (

        <div className="container">
            
            <figure className="contact-figures">
                <a href="https://wa.me/15991105703?text=Ol%C3%A1,%20tudo%20bem%3F" target="blank"><FaWhatsapp size={55} /></a>
                <a href="http://github.com/Zdvictor" target="blank"><FaGithub size={53}/></a>
                <a href="http://www.linkedin.com/in/zdvictor" target="blank"><CiLinkedin size={55} /></a>
                <a href="http://docs.google.com/document/d/1u0i5uuISbKGj3HUce57nSWtd1pZeT7I6" target="blank"><PiReadCvLogo size={50} /></a>
            </figure>

            <section ref={elementRef} className="contact">

                <h2 className="contact-color">CONTATO</h2>

                

                
                    <form className="form-contact" onSubmit={handleSubmit(onSubmit)} >

                        <input type="text" placeholder="DIGITE SEU NOME" {...register("name")} />
                        <p>{errors.name && errors.name.message}</p>
                        <input type="text" placeholder="DIGITE SEU EMAIL" {...register("email")} />
                        <p>{errors.email && errors.email.message}</p>
                        <input type="text" placeholder="DIGITE SEU TELEFONE" {...register("cellphone")} />
                        <p>{errors.cellphone && errors.cellphone.message}</p>
                        <textarea placeholder="DIGITE SUA MENSAGEM" {...register("message")} />
                        <p>{errors.message && errors.message.message}</p>

                        <button> { !loading ? "ENVIAR": <ClipLoader color="#fff" />  }</button>

                    </form>



            </section>

        </div>

    )

}