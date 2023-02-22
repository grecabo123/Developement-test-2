import React from 'react'

function Banner() {
    return (
        <section className="text-center d-flex flex-column min-vh-60">
            <section className="banner">
                {/* <div className="box"> */}
                    <div className="banner-content">
                        <center><h2 className='title'>Customized RCM Solutions, Real Results</h2></center>
                        <center><h2 className='subtitle'>Improving efficiency, profitability, and patient satisfaction.</h2></center>
                        <div className="mt-5">
                            <button className='btn-learn'>Learn More</button>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        </section>
    )
}

export default Banner