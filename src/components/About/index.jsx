import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUser, FaCode, FaBriefcase, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const cards = [
        {
            icon: FaUser,
            title: "Quem Sou",
            description: "Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis e inovadoras.",
            color: "from-customGreen to-customBlue"
        },
        {
            icon: FaLaptopCode,
            title: "Frontend",
            description: "Especializado em React, Next.js e TypeScript, criando interfaces modernas e responsivas.",
            color: "from-customGreen to-emerald-400"
        },
        {
            icon: FaServer,
            title: "Backend",
            description: "Desenvolvimento com Node.js, Express e NestJS, construindo APIs robustas e escaláveis.",
            color: "from-customBlue to-blue-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div id="sobre" className="container mx-auto mt-32 p-5 relative">
            {/* Partículas de fundo */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-customGreen rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0.2
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <motion.section
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative z-10"
            >
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-4xl font-bold inline-block"
                        whileHover={{ scale: 1.1 }}
                    >
                        SOBRE <span className="text-customGreen">MIM</span>
                    </motion.h2>
                    <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-customGreen to-customBlue mx-auto mt-4"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "6rem" } : { width: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>

                <motion.p
                    variants={itemVariants}
                    className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    Sou um desenvolvedor web apaixonado por criar soluções inovadoras e eficientes. 
                    Com experiência em tecnologias modernas, transformo ideias em realidade através 
                    da programação, sempre buscando entregar a melhor experiência ao usuário.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(5,255,89,0.2)"
                            }}
                            className="bg-[#1E1E1E] rounded-xl p-8 relative overflow-hidden group"
                        >
                            {/* Gradiente de fundo animado */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />
                            
                            {/* Ícone animado */}
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <card.icon size={40} className="text-customGreen" />
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                            <p className="text-gray-400">{card.description}</p>

                            {/* Linha decorativa animada */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-customGreen to-customBlue"
                                initial={{ width: "0%" }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
} 