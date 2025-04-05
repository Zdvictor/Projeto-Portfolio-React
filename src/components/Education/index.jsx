import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";

export default function Education() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const education = [
        {
            title: "Análise e Desenvolvimento de Sistemas",
            institution: "Anhanguera",
            period: "2024 - Atual",
            type: "Graduação",
            icon: FaGraduationCap,
            description: "Cursando graduação em Análise e Desenvolvimento de Sistemas, focando em desenvolvimento de software e soluções tecnológicas."
        },
        {
            title: "Next.js do Zero ao Avançado com Projetos",
            institution: "Udemy",
            period: "2023",
            type: "Curso",
            icon: SiUdemy,
            description: "Desenvolvimento avançado com Next.js, incluindo projetos práticos com Prisma, Tailwind CSS, Next Auth e outras tecnologias modernas."
        },
        {
            title: "NestJS",
            institution: "Udemy",
            period: "2023",
            type: "Curso",
            icon: SiUdemy,
            description: "Criação de REST APIs com NestJS, implementação de banco de dados com TypeORM e Prisma, autenticação JWT e práticas avançadas."
        },
        {
            title: "React Js do Zero ao Avançado",
            institution: "Udemy",
            period: "2022",
            type: "Curso",
            icon: SiUdemy,
            description: "Desenvolvimento de aplicações completas com React JS, incluindo hooks, context API, rotas, consumo de APIs e projetos práticos."
        },
        {
            title: "Formação Node.js",
            institution: "Udemy",
            period: "2022",
            type: "Curso",
            icon: SiUdemy,
            description: "Desenvolvimento de sistemas web com Node.js e Javascript, incluindo APIs REST, bancos de dados, autenticação e práticas avançadas."
        },
        {
            title: "Desenvolvimento Web Completo",
            institution: "Udemy",
            period: "2021",
            type: "Curso",
            icon: SiUdemy,
            description: "20 cursos + 20 projetos. Formação completa abrangendo HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e mais."
        },
        {
            title: "Inglês",
            institution: "FISK",
            period: "2018 - 2025",
            type: "Curso de Idiomas",
            icon: IoLanguage,
            description: "Curso completo de inglês, desenvolvendo habilidades em conversação, escrita e compreensão."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <div id="education" className="container mx-auto mt-32 p-5">
            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col items-center"
            >
                <motion.h2
                    className="text-3xl font-bold mb-16"
                    whileHover={{ scale: 1.1, color: "#05FF59" }}
                >
                    EDUCAÇÃO & <span className="text-customBlue">CERTIFICAÇÕES</span>
                </motion.h2>

                <div className="w-full max-w-4xl">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative pl-8 pb-12 border-l-2 border-customGreen last:pb-0"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-neutral-800 p-6 rounded-lg shadow-lg ml-8 hover:shadow-[0_0_15px_rgba(5,255,89,0.3)] transition-all duration-300"
                            >
                                <div className="absolute -left-4 bg-neutral-900 p-2 rounded-full">
                                    <item.icon size={24} className="text-customGreen" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-customBlue mb-2">{item.institution}</p>
                                <p className="text-gray-400 text-sm mb-4">{item.period}</p>
                                <p className="text-gray-300">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
} 