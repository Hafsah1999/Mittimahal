import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const About = () => {
    return (
        <>

           

            {/* main */}

            {/* image */}

            <img className='mb-5' style={{ width: "100%", height: "70vh" }} src="https://cdn.shopify.com/s/files/1/1186/0576/files/Pics-for-Ceramoic-Header.jpg?v=1486719791" alt="" />
            <Link to="/Watercontainer" className='nav-link'>

                 {/* swiper */}

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
                 <Link to='/Showpiece'> <img src="https://i.pinimg.com/564x/2c/14/8c/2c148c7d3eba6c99717d6d3b8a1f9cee.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                 </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/c5/15/69/c515691c6d011d10aff6adbb31966255.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/b7/fc/24/b7fc24fa609776d555583d7d0c639f32.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                
                  </Link></SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/f4/d7/37/f4d7371dac96cc99d27216b164f26667.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link> </SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/49/7c/b6/497cb64981ca53aa8184c6027482f1ac.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link> </SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/ae/4d/f6/ae4df69e0d1cef169e2c48a0af2b8fed.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link></SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/ca/11/39/ca113928fee8288a876b3fd895aac2da.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link></SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/fd/52/eb/fd52eb52e2ecbe0dffd82456e36c9b8a.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link></SwiperSlide>
                <SwiperSlide>
                <Link to='/Showpiece'>
                  <img src="https://i.pinimg.com/564x/e8/60/4c/e8604c445e16d1d766a27b0565c6263f.jpg" style={{ height: "220px", width: "220px" }} alt="" />
                  </Link></SwiperSlide>
              </Swiper>

    {/* our story */}
    <div className="container mt-5 p-5 mb-5 bg-dark bg-opacity-25">
                <div className="row shadow">
                    <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text fw-bold" style={{ fontFamily: "serif", letterSpacing: "2px" }}>OUR STORY</h1>
                    <p className="fs-5 px-5 text-muted" style={{ fontFamily: "serif" }}>
Welcome to MittiMahal, where we bring the magic of mud to your doorstep! Our online store is like a treasure chest filled with amazing things made from earthy goodness. From cool clay pots to unique mud creations, MittiMahal is all about celebrating nature&apos;s beauty. We love how talented hands can turn simple mud into fantastic art. Our collection is a mix of timeless traditions and cool, new ideas that are good for the planet. So, when you shop with us, you&apos;re not just getting stuff  you&apos;re getting a piece of history, a touch of nature, and a whole lot of smiles. Let&apos;s make your shopping experience as awesome as the mud we adore!</p>
                    
                </div>
            </div>
            
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
              </Link>

        


           


            {/* what we do for you */}

            {/* left */}
            <div className="container mt-5 mb-5 bg-dark bg-opacity-25 p-5">
                <div className="row p-5 shadow">
                    <div className="col-md-6 p-3">
                        <h1 className="px-3 mb-3" style={{ fontFamily: 'fantasy', letterSpacing: '1px' }}>WHAT WE DO FOR YOU</h1>
                        <p className="px-3 text-muted" >
At MittiMahal, we&apos;re here to make your shopping experience special! We have a bunch of awesome things made from mud – from classic stuff to cool new ideas. Everything is crafted with love and care. When you shop with us, you&apos;re not just getting things; you&apos;re getting unique items that tell a story. Our products are good for the Earth, and they bring a touch of nature to your life. So, if you want something handmade, eco-friendly, and full of charm, MittiMahal is the place for you! Let&apos;s make your shopping fun and meaningful. </p>
                        <Link to="/Shop"><button className="btn btn-success px-3 mx-3 mt-3 fs-5" style={{ fontFamily: 'cursive' }}>Shop Now</button></Link>
                    </div>


                    {/* right  */}
                    <div className="col-md-6">
                        <div className="row mt-3">
                            <div className="col-md-6   d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-truck-fast fs-4 mb-2 "></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>FREE SHIPPING</h5>
                                <p className="text-muted" style={{ fontSize: '12px', fontFamily: "cursive" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-money-bill-transfer fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>100% MONEY BACK </h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-spa fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>PLANT CARE TIPS</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-walkie-talkie fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>GARDENING SERVICES</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/Utensils" className='nav-link'> 
          
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
              </Link> 

            {/* kind words */}
            <div className="container mb-5 p-5 bg-dark bg-opacity-25">
                <div className="row shadow ">
                    <div className="col-">
                   
                        <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text fw-bold" style={{ fontFamily: "serif", letterSpacing: "2px", textTransform: "uppercase" }}>Kind words from our clients</h1>






                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide>
                                <div className="card about-swiper-1 m-2 shadow-lg bg-dark bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/premium-photo/happy-successful-adult-businesswoman-formal-outfit-stylish-glasses-smiling-looking-while-standing-with-arms-crossed_251859-2390.jpg?w=740" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Charlotte</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1700030073~exp=1700030673~hmac=8b9bef272a9c5b4bf79e12e7a0d22037c687d48287b84121b9940c547e332cd7" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Jackson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/young-female-put-glasses-looking-determined_176420-20746.jpg?w=740&t=st=1700030177~exp=1700030777~hmac=62b859c0e2afb49c0239d57220c380ae8fffb03899c917132d97af3f3a0a7da3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Amella</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1700030126~exp=1700030726~hmac=76423dba7ab8f09044c7f159f32ab7b7e8a2c1e1b435e58f5fb88b3f54123103" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Scarlett</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>   
                                <div className="card m-2 about-swiper-1 shadow-lg bg-dark bg-opacity-25">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1700030210~exp=1700030810~hmac=1cd1b819771fee82733fe80d44dea6dba26f62b2761e75898acfe6e3b21b4dd9" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Lucas</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1700030247~exp=1700030847~hmac=5d748445e590f198c93c100df257d56d50ca8fc9de63a4e1cd342671c4d064b3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Hudson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    </div>
            </div>



        </>
    )
}

export default About