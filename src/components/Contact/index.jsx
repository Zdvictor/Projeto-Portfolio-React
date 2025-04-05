import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./Schema/contactSchema";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import { ClipLoader } from "react-spinners";

export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(contactSchema)
    });

    const contactMethods = [
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            description: "Disponível para chat rápido e chamadas",
            link: "https://wa.me/5515991105703?text=Oi%2C%20tudo%20bem%3F%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
            color: "text-green-500"
        },
        {
            icon: SiGmail,
            title: "Email",
            description: "Me envie um email profissional",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=victor.zaidir@gmail.com",
            color: "text-red-500"
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            description: "Vamos nos conectar",
            link: "http://www.linkedin.com/in/zdvictor",
            color: "text-blue-500"
        },
        {
            icon: FaGithub,
            title: "GitHub",
            description: "Confira meus projetos",
            link: "https://github.com/Zdvictor",
            color: "text-gray-400"
        }
    ];

    function onSubmit(data) {
        setLoading(true);

        const formData = {
            name: data.name,
            email: data.email,
            telefone: data.cellphone,
            message: data.message,
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
            toast.error("Erro ao enviar email");
            setLoading(false);
            reset();
        });
    }

    return (
        <div id="contato" className="container mx-auto mt-32 p-5">
            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col items-center"
            >
                <motion.h2
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, color: "#05FF59" }}
                    className="text-3xl font-bold mb-16 text-center"
                >
                    VAMOS <span className="text-customBlue">CONVERSAR?</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
                    {/* Métodos de Contato */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#1E1E1E] rounded-xl p-6 cursor-pointer group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-customBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <method.icon size={30} className={`${method.color} group-hover:scale-110 transition-transform duration-300`} />
                                        <h3 className="text-xl font-bold">{method.title}</h3>
                                    </div>
                                    <p className="text-gray-400">{method.description}</p>
                                </div>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-customGreen to-customBlue"
                                    initial={{ width: "0%" }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Formulário de Contato */}
                    <motion.form
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="bg-[#1E1E1E] rounded-xl p-8 space-y-6 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-customGreen/5 to-customBlue/5" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <FaPaperPlane className="text-customGreen text-2xl" />
                                <h3 className="text-xl font-bold">Envie uma mensagem</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        placeholder="Nome"
                                        {...register("name")}
                                        className="w-full bg-neutral-800 rounded-lg p-3 border-2 border-transparent focus:border-customGreen transition-colors"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="email"
                                        placeholder="Email"
                                        {...register("email")}
                                        className="w-full bg-neutral-800 rounded-lg p-3 border-2 border-transparent focus:border-customGreen transition-colors"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        type="text"
                                        placeholder="Telefone"
                                        {...register("cellphone")}
                                        className="w-full bg-neutral-800 rounded-lg p-3 border-2 border-transparent focus:border-customGreen transition-colors"
                                    />
                                    {errors.cellphone && <p className="text-red-500 text-sm mt-1">{errors.cellphone.message}</p>}
                                </div>

                                <div>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.02 }}
                                        placeholder="Mensagem"
                                        rows={4}
                                        {...register("message")}
                                        className="w-full bg-neutral-800 rounded-lg p-3 border-2 border-transparent focus:border-customGreen transition-colors"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-customGreen to-customBlue text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    {loading ? <ClipLoader color="#000" size={20} /> : (
                                        <>
                                            <FaPaperPlane />
                                            Enviar Mensagem
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </motion.section>
        </div>
    );
}
