import React from 'react'
import AboutJS from '../json/About.json'

function About() {
    return (
        <div>
            <div className="container">
                <div className="box-section">
                    <section className="box-container">
                        <h2 className="header-title">
                            Why Revenulytics?
                        </h2>
                        <br />
                        <p className='section-parag text-secondary'>In a rapidly evolving healthcare marketplace, we believe that clinicians should be able to just focus on caring for their patients and healthcare technologist’s concentration and resources should be devoted to developing the next medical breakthroughs that will revolutionize patient care.</p>
                        <br />
                        <p className='section-parag text-secondary'>
                            With more than 30 years experience in the industry, we have developed workflows and processes to assist bio-tech start-ups, hospitals, clinics, stand-alone image centers and durable medical equipment providers to lower their A/R days and get reimbursed on time. You can rest assured that you can leave your revenue cycle operations to the experts.
                        </p>
                    </section>
                </div>
            </div>
            <div className="mt-3">
                <br />
                <div className="container">
                    <div className="row justify-content-space">
                        {
                            AboutJS.map((data, idx) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
                                        <center><img src={data.image} alt="Logo" className='img-responsive text-center' width={211} height={250} /></center>
                                        <p className='text-info-parag text-secondary' >{data.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <br />
            <div className="mt-4">
                <center> <a className='story-btn' href="/">Our Story</a></center>
            </div>
            <div className="mt-4">
                <br />
                <section className='serve'>
                    <center><h2>Who We Serve</h2></center>
                    <div className="mt-2">
                        <div className="container">
                            <p className='serve-text'>We serve both start up and established bio-tech providers, clinics, independent diagnostic testing facilities, durable medical equipment companies, standalone image centers and hospitals by bringing vast operational knowledge and customized revenue cycle solutions so healthcare providers can focus on realizing their mission.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About