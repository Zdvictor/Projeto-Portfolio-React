import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DiReact, DiNodejs, DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiNestjs, SiFastify, SiPhp, SiPostgresql, SiMysql } from "react-icons/si";

export default function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const skills = [
        { name: "React", value: 100, icon: FaReact },
        { name: "Node.js", value: 100, icon: FaNodeJs },
        { name: "JavaScript", value: 100, icon: SiJavascript },
        { name: "TypeScript", value: 100, icon: SiTypescript },
        { name: "Next.js", value: 95, icon: SiNextdotjs },
        { name: "Express", value: 100, icon: SiExpress },
        { name: "Nest.js", value: 90, icon: SiNestjs },
        { name: "Fastify", value: 100, icon: SiFastify },
        { name: "PostgreSQL", value: 100, icon: SiPostgresql },
        { name: "MySQL", value: 100, icon: SiMysql },
        { name: "Tailwind", value: 100, icon: SiTailwindcss },
        { name: "Firebase", value: 100, icon: SiFirebase }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div id="habilidades" className="container mx-auto mt-32 p-5">
            <motion.h2
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-16 text-center"
            >
                MINHAS <span className="text-customGreen">HABILIDADES</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <skill.icon size={40} className="text-customGreen" />
                            <span className="text-xl font-semibold">{skill.name}</span>
                        </div>
                        <div className="h-2 bg-neutral-700 rounded-full">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-customGreen to-customBlue rounded-full"
                            />
                        </div>
                        <span className="text-sm text-gray-400 mt-2 block text-right">
                            {skill.value}%
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 