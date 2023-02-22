import React from 'react'
import Demands from '../json/Demands.json';
import img7 from '../assets/corvista health.jpg';
import img8 from '../assets/stratify genomics.jpeg';
import img9 from '../assets/vhsosfl.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


function Info() {
    return (
        <React.Fragment>
            <div className='mt-5'>
                <center><h2 className='demands'>Revolutionize Your Revenue Cycle to Face Today's Demands</h2></center>
                <div className="mt-3">
                    <center><span className='text-empower'>Empowering healthcare providers, <span style={{ color: "#03B4C6", fontWeight: "bold" }}>big</span> and <span style={{ color: "#03B4C6", fontWeight: "bold" }}>small</span> with customized <br /><center><span>solutions</span></center></span></center>
                </div>
            </div>
            <div className="mt-5">
                <div className="container">
                    <div className="box-img">
                        <div className="center">
                            <div className="row">
                                {
                                    Demands.map((data, idx) => {
                                        return (
                                            <div className="col-lg-6 col-sm-12 mb-3 col-md-12">
                                                <div className="box-content-img">
                                                    <center><a href="/"><img src={data.image} alt="Logo" /></a></center>
                                                    <div className="mt-3">
                                                        <center><div className='text-info-box text-secondary' dangerouslySetInnerHTML={{__html: data.text}} /></center>
                                                    </div>
                                                    <div className="mt-3">
                                                        <center><span className='learn'>Learn More</span></center>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <div className="slide-section-info p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="section-misery">
                                    <span> How we’ve taken the <span style={{ color: "#03b4c6" }}>misery and mystery out of RCM</span> for our customers</span>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <Swiper
                                    cssMode={true}
                                    loop={true}
                                    navigation={true}
                                    pagination={true}
                                    mousewheel={true}
                                    autoplay={{
                                        delay: 5000
                                    }}
                                    keyboard={true}
                                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='box-slide'>
                                        <p>I have worked with Aileen and subsequently Revenulytics for a number of years.  Her in depth knowledge of healthcare reimbursement pathways has allowed her to maximize reimbursement for my team and I within prior organizations and has been critical in working with us to create our strategies around our Go-To-Market preparations here at CorVista.  Aileen and her team are highly collaborative and have created tremendous opportunities for maximizing revenue.</p>
                                        <div className="mt-4">
                                            <div className="box-section">
                                                <a href="/"><img src={img7} className="img-circle" alt="" /></a>
                                                <ul className='text-start text-person'>
                                                    <li><span className='slide-footer'>Scott Burfer</span></li>
                                                    <li><span className='slide-footer-title'>Chief Commercial Officer</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                    <SwiperSlide className='box-slide'>
                                        <p>
                                            We feel fortunate to have such an outstanding group as Revenulytics handle the revenue cycle management for our company.
                                            Aileen and Alex are extremely knowledgeable and have gone out of their way to make our transition from inhouse billing smooth and efficient.
                                            They work hard to collect claims as if they were collecting for their own business.
                                            Revenulytics has made the often confusing, tedious task of claims billing much more manageable with professionalism, humor, patience,
                                            responsiveness and 30 years of expertise.
                                            We’re looking forward to our continued relationship and growth.</p>
                                        <div className="mt-4">
                                            <div className="box-section">
                                                <a href="/"><img src={img8} className="img-circle" alt="" /></a>
                                                <ul className='text-start text-person'>
                                                    <li><span className='slide-footer'>Paula Robins</span></li>
                                                    <li><span className='slide-footer-title'>Director of Business Operations</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='box-slide'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias velit quo eius commodi earum omnis cumque consequatur quas voluptatibus, debitis distinctio pariatur perspiciatis consectetur quaerat nobis voluptatum tempore veniam!</p>
                                        <div className="mt-4">
                                            <div className="box-section">
                                                <a href="/"><img src={img9} className="img-circle" alt="" /></a>
                                                <ul className='text-start text-person'>
                                                    <li><span className='slide-footer'>Alysha Henry-Johnson</span></li>
                                                    <li><span className='slide-footer-title'>PA-C</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="conversation bg-conversation">
                <div className="mt-1">
                    <center><h2 className='section-title'>Let's Get the Conversation Started</h2></center>
                </div>
                <div className="mt-2">
                    <center><span className='serve-text'>If you’re ready to achieve improved visibility, control, and profitability, contact us and we’ll be in touch right away.</span></center>
                </div>
                <div className="mt-5">
                    <a href="/" className='bg-btn'>Contact us</a>
                </div>
            </section>
            {/* </div> */}
        </React.Fragment>
    )
}

export default Info