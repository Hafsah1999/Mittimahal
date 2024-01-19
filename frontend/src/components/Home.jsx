
const Home = () => {
  return (
    <>

      <div className="container" >
        <div className="row" >
          <div className="col-md-6 d-flex justify-content-center flex-column align-items-center">
            <h1 className="fw-semibold" style={{ fontFamily: "monospace", letterSpacing: "2px", fontSize: "47px" }}>Elevate your lifestyle with <span style={{color:"brown"}}>Mitti Mahal</span></h1>
            <p className="fs-6 py-3 text-muted" style={{fontFamily:"cursive",letterSpacing:"1px",wordSpacing:"3px"}}>It&apos;s a journey into the heart of mud artistry. Join us in fostering a deeper connection with the Earth, one mud-made masterpiece at a time. <br /> Shop with us and bring the beauty of nature into your everyday life.</p>
          </div>
          <div className="col-md-6">
            <div className="bg-img-home-1"></div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Home