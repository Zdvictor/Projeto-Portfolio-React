//Components
import Header from './components/Header'
import Main from './components/Main'
import Specialties from './components/specialties'
import Experience from './components/Experience'
import Contact from './components/Contact'

//Contex
import ScrollProvider from './contex/scrollContext'

//Toast
import { ToastContainer } from 'react-toastify'


//CSS
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      
    <ScrollProvider>

      <ToastContainer autoClose={3000} />

          <Header />
          <Main />
          <Specialties />
          <Experience />
          <Contact />
      
        

    </ScrollProvider>

    </>
  )
}

export default App
