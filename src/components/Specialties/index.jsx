import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DiReact, DiNodejs, DiDatabase, DiCode } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";

//IMG
import front from "../../assets/foto-front.png"
import back from "../../assets/foto-back.png"

export default function Specialties() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const frontendTechs = [
        { icon: DiReact, name: "React.js" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiTypescript, name: "TypeScript" }
    ];

    const backendTechs = [
        { icon: DiNodejs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: DiDatabase, name: "MySQL" },
        { icon: DiCode, name: "REST API" }
    ];

    return (
        <div id="especialidades" className="container mx-auto mt-32 p-5 overflow-x-hidden scrollbar-hide">
            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col gap-y-32 mt-36 p-5"
            >
                <motion.h2
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1, color: "#05FF59" }}
                    className="text-center text-3xl font-bold cursor-pointer"
                >
                    MINHAS <span className="text-customGreen">ESPECIALIDADES</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Frontend Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#1E1E1E] rounded-xl p-8 relative overflow-hidden group"
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-customGreen/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <DiCode size={40} className="text-customGreen" />
                                <h3 className="text-2xl font-bold">Frontend</h3>
                            </div>
                            
                            <p className="text-gray-400 mb-8">
                                Desenvolvimento de interfaces modernas e responsivas, com foco em experiência do usuário e performance.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {frontendTechs.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <tech.icon size={24} className="text-customGreen" />
                                        <span>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#1E1E1E] rounded-xl p-8 relative overflow-hidden group"
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-customBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <DiDatabase size={40} className="text-customBlue" />
                                <h3 className="text-2xl font-bold">Backend</h3>
                            </div>
                            
                            <p className="text-gray-400 mb-8">
                                Desenvolvimento de APIs robustas e escaláveis, com foco em segurança e boas práticas.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {backendTechs.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <tech.icon size={24} className="text-customBlue" />
                                        <span>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
