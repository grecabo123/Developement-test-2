import React from 'react'
import About from './About'
import Banner from './Banner'
import Footer from './Footer'
import Info from './Info'
import Navbar from './Navbar'


function Home() {
    return (
       <React.Fragment>
            <Navbar/>
            <Banner />
            <About/>
            <Info />
            <Footer/>
       </React.Fragment>
    )
}

export default Home