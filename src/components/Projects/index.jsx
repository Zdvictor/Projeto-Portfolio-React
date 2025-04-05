import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaShoppingCart, FaCss3, FaStripe,  } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiFastify, SiMercadopago } from "react-icons/si";
import shirtStore from "../../assets/projects/shirt-store.png";
import chamados from "../../assets/projects/chamados.png";
import docs from "../../assets/projects/docs.png";
import bank from "../../assets/projects/bank.png";
import futschool from "../../assets/projects/futschool.png";
import minesTower from "../../assets/projects/mines.png";
export default function Projects() {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const projects = [
        {
            title: "SHIRT STORE",
            description: "E-commerce especializado em camisas de futebol históricas e lendárias. Desenvolvido com React e Node.js, oferece uma experiência completa de compra com carrinho, sistema de pagamento integrado ao Mercado Pago (PIX e Cartão).",
            image: shirtStore,
            techs: [
                { name: "React", icon: FaReact },
                { name: "Node.js", icon: FaNodeJs },
                { name: "Tailwind", icon: SiTailwindcss },
                { name: "Mercado Pago", icon: SiMercadopago }
            ],
            links: {
                live: "#",
                github: "https://github.com/Zdvictor"
            },
            inDevelopment: true
        },
        {
            title: "SISTEMA DE CHAMADOS",
            description: "O Sistema de Chamados é uma plataforma desenvolvida para empresas gerenciarem e acompanharem chamados técnicos de forma eficiente. Este projeto foi criado como parte do meu trabalho freelancer, com foco em facilitar a gestão de tickets e melhorar a comunicação entre equipes técnicas.",
            image: chamados,
            techs: [
                { name: "React", icon: FaReact },
                { name: "Firebase", icon: SiMongodb },
                { name: "CSS", icon: FaCss3 },
                { name: "Authentication", icon: FaNodeJs }
            ],
            links: {
                live: "https://sistemagestao.netlify.app",
                github: "https://github.com/Zdvictor/Projeto-SistemaChamados-React"
            }
        },
        {
            title: "GESTÃO DE DOCUMENTOS TAUGOR",
            description: "Sistema de Gestão de Documentos e uma plataforma desenvolvida para manipulação de documentos. Foi um Desafio proposto para uma vaga na Taugor. O sistema permite ao administrador cadastrar, atualizar e excluir registros de funcionários, gerando PDFs automáticos e mantendo histórico de alterações.",
            image: docs,
            techs: [
                { name: "React", icon: FaReact },
                { name: "Firebase", icon: SiMongodb },
                { name: "CSS", icon: FaCss3 },
                { name: "JSPDF", icon: FaNodeJs }
            ],
            links: {
                live: "https://desafio-gestao-react.vercel.app/",
                github: "https://github.com/Zdvictor/Desafio-Gestao-React"
            }
        },
        {
            title: "FUTSCHOOL",
            description: "FutSchool é uma plataforma de matrícula online desenvolvida com Next.js e TypeScript, voltada para atletas que desejam evoluir no futebol. O sistema permite que os usuários escolham um plano de treino, realizem o pagamento com Stripe e recebam confirmação por e-mail — tudo em uma interface moderna e responsiva.",
            image: futschool,
            techs: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "CSS", icon: FaCss3 },
                { name: "Server Side", icon: FaNodeJs },
                { name: "Stripe", icon: FaStripe  }
            ],
            links: {
                live: "https://projeto-fut-school-next.vercel.app",
                github: "https://github.com/Zdvictor/Projeto-FutSchool-Next"
            }
        },
        {
            title: "BANK CENTER",
            description: "BankCenter é uma aplicação bancária completa desenvolvida com React e Firebase. Este projeto inclui funcionalidades como sistema de login, cadastro de usuários, recuperação de senha e transferência de valores entre contas(fictício).",
            image: bank,
            techs: [
                { name: "React", icon: FaReact },
                { name: "Firebase", icon: SiMongodb },
                { name: "CSS", icon: FaCss3 },
                { name: "Authentication", icon: FaNodeJs }
            ],
            links: {
                live: "https://projeto-bank-center-react.vercel.app",
                github: "https://github.com/Zdvictor/Projeto-BankCenter-React"
            }
        },
        {
            title: "MINES TOWER",
            description: "Mines Tower é um Jogo desenvolvido com Next.js, que e uma mistura do classico mines com torres, o objetivo e passar cada coluna e linha sem explodir as bombas.",
            image: minesTower,
            techs: [
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Tailwind", icon: SiTailwindcss },
                { name: "Server Side", icon: FaNodeJs }
            ],
            links: {
                live: "https://projeto-mines-tower-next.vercel.app/",
                github: "https://github.com/Zdvictor/Projeto-MinesTower-Next"
            }
        }
    ];

    return (
        <div id="projetos" className="container mx-auto mt-32 p-5">
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
                    MEUS <span className="text-customBlue">PROJETOS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#1E1E1E] rounded-xl overflow-hidden group relative flex flex-col h-full"
                        >
                            {/* Imagem com overlay */}
                            <div className="relative h-full overflow-hidden">
                                {project.inDevelopment && (
                                    <div className="absolute top-4 right-4 z-20 bg-customGreen text-black px-3 py-1 rounded-full text-sm font-bold">
                                        Em Desenvolvimento
                                    </div>
                                )}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] to-transparent z-10"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6 relative z-20 flex flex-col h-full">
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 text-customGreen">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 line-clamp-4 min-h-[96px]">{project.description}</p>
                                </div>

                                {/* Tecnologias - Agora com posição fixa */}
                                <div className="py-4">
                                    <div className="flex flex-wrap gap-3">
                                        {project.techs.map((tech, techIndex) => (
                                            <motion.div
                                                key={techIndex}
                                                whileHover={{ scale: 1.1 }}
                                                className="flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-full"
                                            >
                                                <tech.icon className="text-customGreen text-lg min-w-[20px] flex items-center justify-center" />
                                                <span className="text-sm leading-none whitespace-nowrap">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Links - Na parte inferior */}
                                <div className="flex gap-4 pt-4 border-t border-neutral-800">
                                    {!project.inDevelopment ? (
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-customGreen to-customBlue text-black font-bold py-2 px-4 rounded-lg hover:opacity-90"
                                        >
                                            <FaExternalLinkAlt />
                                            Visitar
                                        </motion.a>
                                    ) : (
                                        <motion.div
                                            className="flex-1 flex items-center justify-center gap-2 bg-neutral-700 text-gray-300 font-bold py-2 px-4 rounded-lg cursor-not-allowed"
                                        >
                                            <FaExternalLinkAlt />
                                            Em Breve
                                        </motion.div>
                                    )}
                                    <motion.a
                                        href={!project.inDevelopment && project.links.github }
                                        target="_blank"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 flex items-center justify-center gap-2 bg-neutral-800 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 ${!project.inDevelopment ? "cursor-pointer" : "cursor-not-allowed"}`}
                                    >
                                        <FaGithub />
                                        Código
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
} 