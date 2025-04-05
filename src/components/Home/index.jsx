import { useState } from "react";
import { motion } from "framer-motion";

//Icons
import { FaRegFolder, FaChevronDown, FaChevronUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

//Projects
import { projects as initialProject } from "./Projects";

//IMG
import img from "../../assets/foto-perfil.jpg";

export default function Home() {
    const [openDescription, setOpenDescription] = useState(false);
    const [valueOpen, setValueOpen] = useState(null);
    const [projects, setProjects] = useState(initialProject);
  
    const handleDescription = (id) => {
        setOpenDescription(prevState => {
            if (id === valueOpen) {
                setValueOpen(null);
                return false;
            } else {
                setValueOpen(id);
                return true;
            }
        });
    };

    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Zdvictor" },
        { icon: FaLinkedin, href: "http://www.linkedin.com/in/zdvictor" },
        { icon: SiGmail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=victor.zaidir@gmail.com" }
    ];

    return (
        <motion.article
            initial="hidden"
            animate="visible"
            variants={pageVariants}
            className="min-h-screen flex flex-col justify-center relative"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-neutral-800 to-neutral-900 -z-10" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden -z-5">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-customGreen rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-4 items-center p-5">
                <motion.section
                    variants={heroVariants}
                    className="col-span-12 lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8"
                    >
                        <motion.h1
                            className="text-5xl font-bold mb-4 bg-gradient-to-r from-customGreen to-customBlue bg-clip-text text-transparent"
                            whileHover={{ scale: 1.05 }}
                        >
                            Olá, meu nome é Victor
                        </motion.h1>
                        <motion.div
                            className="flex gap-4 justify-center lg:justify-start mb-6"
                        >
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-customGreen hover:text-customBlue transition-colors"
                                >
                                    <link.icon size={30} />
                                </motion.a>
                            ))}
                        </motion.div>
                        <motion.p
                            className="text-2xl text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
            A tecnologia sempre despertou meu interesse desde a infância, e foi
            essa paixão que me fez seguir uma carreira como Desenvolvedor Web
            Full Stack, onde transformo ideias em realidade através da
            programação.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={heroVariants}
                        className="mt-12"
                    >
                        <motion.h2
                            className="text-3xl font-bold mb-8 text-center lg:text-left"
                            whileHover={{ scale: 1.05, color: "#05FF59" }}
                        >
                            TOP PROJECTS
                        </motion.h2>

                        <motion.div className="space-y-4">
                            {projects.map((project) => (
                                <motion.div
                    key={project.id}
                                    whileHover={{ scale: 1.02 }}
                                    className={`bg-neutral-800 rounded-lg overflow-hidden transition-all duration-300 ${
                                        !openDescription || project.id !== valueOpen ? "hover:shadow-[0_0_15px_rgba(5,255,89,0.3)]" : ""
                                    }`}
                                >
                                    <div className={
                                        !openDescription || project.id !== valueOpen
                                            ? "w-full p-4 flex items-center justify-between"
                                            : "w-full p-6 flex flex-col gap-4"
                                    }>
                                        {(!openDescription || project.id !== valueOpen) ? (
                                            <>
                                                <div className="flex items-center gap-4">
                                                    <FaRegFolder size={30} className="text-customGreen" />
                                                    <span className="text-lg font-semibold">{project.name}</span>
                                                </div>
                                                <motion.button
                                                    onClick={() => handleDescription(project.id)}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="text-customBlue cursor-pointer p-2 z-50 relative"
                                                    type="button"
                                                    aria-label="Expandir descrição"
                                                >
                                                    <FaChevronDown size={24} />
                                                </motion.button>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex justify-end">
                                                    <motion.button
                                                        onClick={() => handleDescription(project.id)}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="text-customBlue cursor-pointer p-2 z-50 relative"
                                                        type="button"
                                                        aria-label="Recolher descrição"
                                                    >
                                                        <FaChevronUp size={24} />
                                                    </motion.button>
                                                </div>
                                                <motion.div
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                                    <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                          href={project.href}
                                                        target="_blank"
                                                        className="inline-block w-full text-center bg-gradient-to-r from-customGreen to-customBlue text-black font-bold py-2 px-4 rounded-md hover:opacity-90"
                        >
                                                        Acessar Projeto
                                                    </motion.a>
                                                </motion.div>
                      </>
                    )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.section
                    variants={heroVariants}
                    className="hidden lg:flex lg:col-span-6 order-1 lg:order-2 justify-center items-center"
                >
                    <motion.div
                        className="relative w-[70%]"
                        whileHover={{ scale: 1.05 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.1}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-customGreen to-customBlue rounded-full blur-3xl opacity-20"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                        <motion.img
                            src={img}
                            alt="img-victor"
                            className="relative rounded-full border-4 border-customGreen w-full h-full object-cover"
                            animate={{
                                y: [-10, 10, -10]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.section>
            </div>
        </motion.article>
    );
}