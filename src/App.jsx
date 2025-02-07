import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Contact from './pages/Contact/Contact'
import OurTeam from './components/About/OurTeam'
import Faq from './components/About/Faq'
import Signup from './pages/SignUp/Signup'
import Signin from './pages/SignIn/Signin'
import Achive from './components/About/Achive'
import Services from "./components/Services/Services"
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
import CookiePolicy from "./pages/Footer/privacyPolicy/CookiePolicy"
import EULA from "./pages/Footer/privacyPolicy/EULA"
import Disclaimer from "./pages/Footer/privacyPolicy/Disclaimer"
import DmcaPolicy from "./pages/Footer/privacyPolicy/DMCA"
import GdbrPolicy from "./pages/Footer/privacyPolicy/GdbrPolicy"
import AntiSpamPolicy from "./pages/Footer/privacyPolicy/AntiSpamPolicy"
import ViewDetail from "./components/Join/ViewDetail"
import StudentServiceModel from "./components/Services/StudentServiceModel"
import Form from "./components/Join/Form"
import SiteMap from "./components/Home/SiteMap"
import TalspoAPI from "./components/About/TalspoAPI"
import TalspoSearchAI from "./components/About/TalspoSearchAI"
import LegalCertificate from "./pages/Footer/privacyPolicy/LegalCertificate"
import Talfia from "./components/About/Talfia"
import TalspoAffiliate from "./components/About/TalspoAffiliate"
import DownloadApp from "./pages/Footer/DownloadApp"

const App = () => {
  return (
    <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/achievements' element={<Achive />} />
        <Route path='/services' element={<Services />} />
        <Route path='/partners' element={<DoPatnership />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works?" element={<HowWeWork />} />
        <Route path="/talspo-here" element={<TalspoHere />} />
        <Route path="/tca" element={<Tca />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path='/loading' element={<Loading />} />
        <Route path="/opportunities" element={<Opportunity />} />
        <Route path="/view-detail/:id" element={<ViewDetail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/links" element={<SiteMap />} />
        <Route path="/talfia" element={<Talfia />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-condition" element={<TermsCondition />} />
        <Route path="/term-of-use" element={<TermOfUse />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/eula-policy" element={<EULA />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/dmca-policy" element={<DmcaPolicy />} />
        <Route path="/gdbr-policy" element={<GdbrPolicy />} />
        <Route path="/anti-spam-policy" element={<AntiSpamPolicy />} />
        <Route path="/legal-certificate" element={<LegalCertificate />} />
        <Route path="/service-detail/:id" element={<StudentServiceModel />} />
      
        <Route path="/talspo-search" element={<TalspoSearchAI />} />
        <Route path="/talspo-api" element={<TalspoAPI />} />
        <Route path="/join" element={<JoinTeam />} />
        <Route path="/talspo-affiliate" element={<TalspoAffiliate />} />


        

        <Route path="/app" element={<DownloadApp />} />

         


      </Routes>
    </div>
  )
}

export default App