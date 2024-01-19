import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <header className="py-1  bg-dark bg-opacity-25">
  <div className="container d-flex flex-wrap justify-content-center">
     
      <span className="fs-4 fw-semibold" style={{fontFamily:"serif",letterSpacing:"1px"}}>Mitti Mahal</span>
   
  </div>
</header>



    <nav className="py-1 bg-light ">
  <div className="container d-flex flex-wrap">
    <ul className="nav me-auto ">
      <li className="nav-item">
        <Link
          to="/Home"
          className="nav-link link-danger px-2 fs-5 fw-semibold"
          aria-current="page"
        >
            <font style={{ verticalAlign: "inherit" }}>Home</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Browse" className="nav-link link-danger fs-5 fw-semibold px-2">
            <font style={{ verticalAlign: "inherit" }}>Products</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className="nav-link link-danger fs-5 fw-semibold px-2">
            <font style={{ verticalAlign: "inherit" }}>Contact</font>
        </Link>
      </li>
     
     
    </ul>

  
    <ul className="nav">
      <li className="nav-item">
        <Link to="/Login" className="nav-link link-dark px-2">
            <font style={{ verticalAlign: "inherit",fontFamily:"serif" }} className="fw-semibold fs-5">Login</font>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Signup" className="nav-link link-dark px-2">
         <button className="btn btn-success fw-semibold fs-5 py-0" style={{ verticalAlign: "inherit",fontFamily:"serif" }} > Sign up</button>
        </Link>
      </li>
    </ul>
  </div>
</nav>

    
    </>
  )
}

export default Navbar