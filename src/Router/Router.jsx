import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Career from '../Pages/Career/Career'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Contact from '../Pages/Contact/Contact'

const Routing = () => (
  <Router className="index">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
</Router>
)

export default Routing
