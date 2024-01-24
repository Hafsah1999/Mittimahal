// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom'
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <>

      <div className="container mb-5" >
        <div className="row" >
          <div className="col-md-6 d-flex justify-content-center flex-column ">
            <h1 className="fw-semibold" style={{ fontFamily: "monospace", letterSpacing: "2px", fontSize: "47px", color: "#264653" }}>Elevate your lifestyle with <span style={{ color: "brown" }}>Mitti Mahal</span></h1>
            <p className="fs-6 py-3 text-muted" style={{ fontFamily: "cursive", letterSpacing: "1px", wordSpacing: "3px" }}>It&apos;s a journey into the heart of mud artistry. Join us in fostering a deeper connection with the Earth, one mud-made masterpiece at a time. <br /> Shop with us and bring the beauty of nature into your everyday life.</p>
            <button className="btn  fs-5 w-50 fw-semibold text-white" style={{ fontFamily: "revert-layer", letterSpacing: "2px", backgroundColor: "brown" }}>Explore..</button>
          </div>
          <div className="col-md-6">
            <div className="bg-img-home-1"></div>

          </div>
        </div>
      </div>

      <div className="container ">
        <h3 className="text-categories">TOP CATEGORIES</h3>
        <div className="row">
          <div className="col">
            <Link to='/Showpieces' className='nav-link'><h4 className="mt-4 mb-4" style={{ fontFamily: "serif", color: "brown" }}>Showpieces</h4>
            </Link> <>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mb-5 "
              >
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/2c/14/8c/2c148c7d3eba6c99717d6d3b8a1f9cee.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/c5/15/69/c515691c6d011d10aff6adbb31966255.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/b7/fc/24/b7fc24fa609776d555583d7d0c639f32.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/f4/d7/37/f4d7371dac96cc99d27216b164f26667.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/49/7c/b6/497cb64981ca53aa8184c6027482f1ac.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/ae/4d/f6/ae4df69e0d1cef169e2c48a0af2b8fed.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/ca/11/39/ca113928fee8288a876b3fd895aac2da.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/fd/52/eb/fd52eb52e2ecbe0dffd82456e36c9b8a.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/e8/60/4c/e8604c445e16d1d766a27b0565c6263f.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          <div className="col">
           <Link to="/Utensils" className='nav-link'> <h4 className="mt-4 mb-4" style={{ fontFamily: "serif", color: "brown" }}>Utensils</h4>
           </Link> <>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mb-5 "
              >
                <SwiperSlide>
                  <img src="https://i.pinimg.com/736x/a9/dd/a6/a9dda634fc2169bb6896822b66ba819c.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/564x/a1/b2/2d/a1b22db72c86c76205e82d5a37c352ed.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://anuna.com/images/detailed/48/dahi_handi_designn.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/4f/ce/42/4fce42ced4b1abb0c415f623a05c3aa1.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://rukminim2.flixcart.com/image/1100/1300/knj7wcw0/cup-saucer/q/z/5/large-cup-glazed-all-desi-original-imag26w9whnhuesf.jpeg?q=20&crop=false" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://th.bing.com/th/id/OIP.TediLQR6bzpTaW__0FHXgAHaFU?pid=ImgDet&w=182&h=130&c=7" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://th.bing.com/th/id/OIP.fze3Gxz9rQUihPxItRpANgHaHa?pid=ImgDet&w=182&h=182&c=7" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://th.bing.com/th/id/OIP.xeLYNewtPJlaOuFtcfd1agHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://th.bing.com/th/id/OIP.vmWoFdeVsSnP6NUopKkDQwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
          <div className="col">
            <Link to="/Watercontainer" className='nav-link'><h4 className="mt-4 mb-4" style={{ fontFamily: "serif", color: "brown" }}>Water Containers</h4>
            </Link> <>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mb-5 "
              >
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/aa/79/14/aa7914221888f2bd1609c40467c8a1a9.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/8b/ed/e8/8bede8382fd79fa1ef567ab4f944bfbe.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/8b/f6/25/8bf6254bf3b89bf8bb589048ba5e7b4f.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/a1/01/82/a10182529ddfb5d7842f77d22a783980.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/75/79/75/757975cf0de7956448c9c54c2cd1c45b.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/6d/55/c1/6d55c13cc68f3f59288f893202d85833.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhaw8hfCRqBrKXBjsNk-rW37RPJGKk5YnGQ&usqp=CAU" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbFqGwWk0w3icb9PFBtmnmoLzftVaOx5otA&usqp=CAU" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://i.pinimg.com/236x/c5/37/e5/c537e5d249608fe83c733360fc96615c.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

        </div>
      </div>

    </>
  )
}

export default Home