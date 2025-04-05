//Components
import Home from "./components/Home";
import Specialties from "./components/Specialties"
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

//Toast
import { ToastContainer } from 'react-toastify'

//CSS
import 'react-toastify/dist/ReactToastify.css';

import { motion } from "framer-motion"

function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ScrollToTop />
            <ToastContainer autoClose={3000} />
            <Home />
            <About />
            <Specialties />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
        </motion.div>
    )
}

export default App
