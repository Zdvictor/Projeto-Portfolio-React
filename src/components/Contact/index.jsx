import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
//ZOD VALIDATE FORM
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./Schema/contactSchema";

//TOAST
import { toast } from "react-toastify";

//EMAIL JS
import emailjs from "emailjs-com";


//MASK
import InputMask  from "react-input-mask";

//ICONS
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiReadCvLogo } from "react-icons/pi";
import { ClipLoader } from "react-spinners";




export default function Contact() {
    const elementRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(contactSchema)
    });

    function onSubmit(e) {
        setLoading(true);

        const formData = {
            name: e.name,
            email: e.email,
            telefone: e.cellphone,
            message: e.message,
        };

        emailjs.send(
            "service_2mzmsni",
            "template_fy67dfj",
            formData,
            "zb_tnc_n1f2gbh9m0"
        )
        .then(() => {
            toast.success("Email Enviado com Sucesso");
            setLoading(false);
            reset();
        })
        .catch(err => {
            console.log("ERRO " + err);
            setLoading(false);
            reset();
        });
    }

    return (

            <section id="contato" ref={elementRef} className="container mx-auto mt-52 pb-28 p-5">

            <figure className="flex justify-end gap-x-5 mb-10">
                <a href="https://wa.me/15991105703?text=Ol%C3%A1,%20tudo%20bem%3F" target="blank"><FaWhatsapp size={55} /></a>
                <a href="http://github.com/Zdvictor" target="blank"><FaGithub size={53} /></a>
                <a href="http://www.linkedin.com/in/zdvictor" target="blank"><CiLinkedin size={55} /></a>
                <a href="https://docs.google.com/document/d/1-1DDi8JuEb2JY_6SBvj9Id7TF8FmHrO-/edit" target="blank"><PiReadCvLogo size={50} /></a>
            </figure>

                <h2 className="text-3xl font-bold text-customWeakGreen text-center mb-16">CONTATO</h2>

                <form className="w-full md:w-1/2  flex flex-col gap-y-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="DIGITE SEU NOME" {...register("name")} />
                    <p className="errors">{errors.name && errors.name.message}</p>
                    <input type="text" placeholder="DIGITE SEU EMAIL" {...register("email")} />
                    <p className="errors">{errors.email && errors.email.message}</p>
                    <InputMask  mask="(99) 99999-9999"  type="text" placeholder="DIGITE SEU TELEFONE" {...register("cellphone")} />
                    <p className="errors">{errors.cellphone && errors.cellphone.message}</p>
                    <textarea placeholder="DIGITE SUA MENSAGEM" {...register("message")} />
                    <p className="errors">{errors.message && errors.message.message}</p>

                    <button className="bg-green-600 text-white py-3 px-5 rounded-md hover:bg-green-500 ease-out duration-300">{!loading ? "ENVIAR" : <ClipLoader color="#fff" />}</button>
                </form>

    
            </section>

    );
}
