import "./App.css"
import Header from "./components/common/header/Header"
import {
  BrowserRouter as Router,
 
  Route,
  
  Switch,
} from "react-router-dom";


// import Login from "./components/Login"
// import Signup from "./components/Signup"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Country from "./components/country/Country"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/country' component={Country} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          {/* <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App