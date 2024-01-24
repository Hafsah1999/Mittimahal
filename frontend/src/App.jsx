import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Addproduct from './components/AddProduct'
import Browse from './components/Browse'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Showpiece from './components/Showpiece'
import UpdateProduct from './components/UpdateProduct'
import Utensil from './components/Utensil'
import Watercontainer from './components/Watercontainer'
import Decoration from './components/Decoration'
import PageNotFound from './components/PageNotFound'
import About from './components/About'

const App = () => {
  
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="*" element={<PageNotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddProduct" element={<Addproduct />} />
          <Route path="/Browse" element={<Browse />}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/Showpiece" element={<Showpiece />} />
          <Route path="/UpdateProduct" element={<UpdateProduct />} />
          <Route path="/Utensil" element={<Utensil />} />
          <Route path="/Watercontainer" element={<Watercontainer />} />
          <Route path="/Decoration" element={<Decoration />} />
          <Route path="/About" element={<About />} />



          


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App