import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-neutral-900 relative overflow-hidden">
            {/* Grid de pontos de fundo */}
            <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]">
                {[...Array(400)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 h-1 bg-customGreen/20 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Container principal */}
            <div className="relative z-10">
                {/* Hexágono externo rotativo */}
                <motion.div
                    className="absolute -inset-12 opacity-20"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-48 h-48 border-4 border-customGreen transform rotate-45" />
                </motion.div>

                {/* Círculos orbitando em diferentes planos */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={{ rotate: i * 120 }}
                        animate={{ rotate: [i * 120, i * 120 + 360] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2
                        }}
                    >
                        <motion.div
                            className="absolute w-4 h-4"
                            style={{
                                left: "50%",
                                top: "50%",
                                transform: `translate(-50%, -50%) translate(60px, 0)`
                            }}
                        >
                            <motion.div
                                className="w-full h-full bg-gradient-to-r from-customGreen to-customBlue rounded-full"
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(5,255,89,0.5)",
                                        "0 0 40px rgba(5,201,255,0.5)",
                                        "0 0 20px rgba(5,255,89,0.5)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}

                {/* Container central */}
                <motion.div
                    className="relative w-24 h-24 bg-neutral-800 rounded-xl flex items-center justify-center"
                    animate={{
                        rotate: [0, 90, 180, 270, 360],
                        scale: [1, 1.1, 1],
                        borderRadius: ["20%", "35%", "50%", "35%", "20%"]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Logo */}
                    <motion.div
                        className="relative z-10"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotateY: [0, 360]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <span className="text-4xl font-bold bg-gradient-to-r from-customGreen to-customBlue bg-clip-text text-transparent">
                            VZ
                        </span>
                    </motion.div>

                    {/* Efeito de brilho pulsante */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-customGreen/20 to-customBlue/20 rounded-xl"
                        animate={{
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>

                {/* Linhas de energia */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-0.5"
                        style={{
                            transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                            transformOrigin: "center"
                        }}
                    >
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-customGreen to-customBlue"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{
                                scaleX: [0, 1, 0],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Texto de carregamento com efeito de digitação */}
            <motion.div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.p
                    className="text-lg font-medium"
                    animate={{
                        color: ["#05FF59", "#05C9FF", "#05FF59"]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {["C", "a", "r", "r", "e", "g", "a", "n", "d", "o", ".", ".", "."].map((letter, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                opacity: [0, 1, 0],
                                y: [10, 0, 10]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.p>
            </motion.div>

            {/* Gradiente de fundo com animação suave */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-neutral-800/10 via-neutral-900/20 to-neutral-900"
                animate={{
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
} 