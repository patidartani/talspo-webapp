import "./App.css"
import { Routes , Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Contact from './pages/Contact/Contact'
import OurTeam from './components/About/OurTeam'
import Faq from './components/About/Faq'
import Signup from './pages/SignUp/Signup'
import Signin from './pages/SignIn/Signin'
import Achive from './components/About/Achive'
import Services from "./components/Services/Services"
import LanguageTranslate from "./pages/LanguageTranslate"
import DoPatnership from "./components/Join/DoPatnership"
import JoinTeam from "./components/Join/JoinTeam"
import Opportunity from "./components/Join/Opportunity"
import Blog from "./components/Blog/Blog"
import AboutUs from "./components/About/AboutUs"
import HowWeWork from "./components/About/HowWeWork"

const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/contact-us' element={<Contact />}/>
        <Route  path='/our-team' element={<OurTeam />}/>
        <Route  path='/faq' element={<Faq />}/>
        <Route  path='/signup' element={<Signup />}/>
        <Route  path='/signin' element={<Signin />}/>
        <Route  path='/achievements' element={<Achive />}/>
        <Route  path='/services' element={<Services />}/>
        <Route  path='/partners' element={<DoPatnership />}/>
        <Route  path='/join' element={<JoinTeam />}/>
        <Route path="/jobs" element={<Opportunity/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/how-we-work" element={<HowWeWork/>} />


        <Route  path='/language' element={<LanguageTranslate />}/>




      </Routes>
    </div>
  )
}

export default App