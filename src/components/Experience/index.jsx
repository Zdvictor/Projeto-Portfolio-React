import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTypewriter } from "react-simple-typewriter";
import { FaBriefcase, FaCode, FaServer, FaDatabase } from "react-icons/fa";

export default function Experience() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const experiences = [
        {
            title: "Desenvolvedor Full Stack - CULTURA PARA TODXS",
            period: "Dezembro 2024 - Atual",
            icon: FaBriefcase,
            description: "Trabalhando na empresa CULTURA PARA TODXS, desenvolvendo a plataforma DIVULGAME e criando sites e aplicativos. Responsável pelo desenvolvimento full stack da plataforma de ticketeria, implementando soluções escaláveis e de alta performance.",
            skills: [
                { name: "Frontend", icon: FaCode, items: ["React.js", "React Native", "Tailwind", "TypeScript"] },
                { name: "Backend", icon: FaServer, items: ["Node.js", "Fastify", "PostgreSQL"] },
                { name: "DevOps", icon: FaDatabase, items: ["Docker", "AWS", "CI/CD"] }
            ]
        },
        {
            title: "Desenvolvedor Freelancer",
            period: "Maio 2024 - Novembro 2024",
            icon: FaBriefcase,
            description: "Desenvolvimento de soluções web completas para diversos clientes, utilizando tecnologias modernas e boas práticas de desenvolvimento.",
            skills: [
                { name: "Frontend", icon: FaCode, items: ["React.js", "Vue.js", "Tailwind", "Figma"] },
                { name: "Backend", icon: FaServer, items: ["Node.js", "Express", "REST API"] },
                { name: "Database", icon: FaDatabase, items: ["MongoDB", "MySQL", "Firebase"] }
            ]
        }
    ];

    return (
        <div id="experiencia" className="container mx-auto mt-32 p-5">
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
                    MINHA <span className="text-customBlue">EXPERIÊNCIA</span>
                </motion.h2>

                <div className="w-full max-w-4xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-[#1E1E1E] rounded-xl p-8 relative overflow-hidden group mb-8"
                        >
                            {/* Background Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-customGreen/10 to-customBlue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <exp.icon size={40} className="text-customGreen" />
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                                        <p className="text-customBlue">{exp.period}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-8">
                                    {exp.description}
                                </p>

                                <div className="space-y-6">
                                    {exp.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <skill.icon size={24} className="text-customGreen" />
                                                <h4 className="text-lg font-semibold">{skill.name}</h4>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {skill.items.map((item, itemIndex) => (
                                                    <motion.div
                                                        key={itemIndex}
                                                        whileHover={{ scale: 1.05 }}
                                                        className="bg-neutral-800 px-4 py-2 rounded-lg text-center text-gray-300"
                                                    >
                                                        {item}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
