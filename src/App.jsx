//Components

import Home from "./components/Home";
import Specialties from "./components/Specialties"
import Experience from "./components/Experience"


//Toast
import { ToastContainer } from 'react-toastify'


//CSS
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
      

      <ToastContainer autoClose={3000} />

          
          <Home />
          <Specialties />
          <Experience />
        
          
          
      
        

  

    </>
  )
}

export default App
