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
import TalspoHere from "./components/Home/TalspoHere"
import Tca from "./components/Join/Tca"
import BlogDetail from "./components/Blog/BlogDetail"
import Loading from "./pages/loading/Loading"
import PrivacyPolicy from "./pages/Footer/privacyPolicy/PrivacyPolicy"
import TermsCondition from "./pages/Footer/privacyPolicy/TermsCondition"
import TermOfUse from "./pages/Footer/privacyPolicy/TermOfUse"
import ApplyNow from "./components/Join/ApplyNow"
import CookiePolicy from "./pages/Footer/privacyPolicy/CookiePolicy"
const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/contact-us' element={<Contact />}/>
        <Route  path='/our-team' element={<OurTeam />}/>
        <Route  path='/' element={<Faq />}/>
        <Route  path='/signup' element={<Signup />}/>
        <Route  path='/signin' element={<Signin />}/>
        <Route  path='/achievements' element={<Achive />}/>
        <Route  path='/services' element={<Services />}/>
        <Route  path='/partners' element={<DoPatnership />}/>
        <Route  path='/join' element={<JoinTeam />}/>
        <Route path="/opportunities" element={<Opportunity/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/how-we-work" element={<HowWeWork/>} />
        <Route path="/talspo-here" element={<TalspoHere/>} />
        <Route path="/tca" element={<Tca/>} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route  path='/language' element={<LanguageTranslate />}/>
        <Route  path='/apply' element={<ApplyNow />}/>
        <Route  path='/loading' element={<Loading />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/term-condition" element={<TermsCondition/>}/>
        <Route path="/term-of-use" element={<TermOfUse/>}/>
        <Route path="/cookie-policy" element={<CookiePolicy/>}/>
      </Routes>
    </div>
  )
}

export default App