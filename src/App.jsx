import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './views/Portfolio/Portfolio.scss'
import Porfolio from './views/Portfolio/Porfolio'
import HeaderHome from './components/Header/HeaderHome'
import Landing from './components/Landing/Landing'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Porfolio />}/>
          <Route path='/HeaderHome' element={<HeaderHome />}/>
          <Route path='/Landing' element={<Landing />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
    </BrowserRouter>
    // <>
    //   <Porfolio/>
    // </>
  )
}

export default App
