import React from 'react'
import logoimg from '../assets/logo.png'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'

function Navbar() {
    
    const windowSize = useMediaQuery({query: '(max-width: 1000px)'});

    return (
        <nav className="navbar navbar-expand-lg  bg-color fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logoimg} alt="Logo" className='img-responsive img-size' />
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon fw-bold"></span> */}
                    <FaBars className='border-0 text-dark' size={25} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-responsive ms-auto list-nav ">
                        <li className="nav-item dropdown dropdown-menu-start">
                            <a className="nav-link " href="/" id="Solutions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solutions <FaCaretDown />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-center bg-light-sub border-0 sub-item" aria-labelledby="Solutions">
                                <li><a className="dropdown-item-sub" href="/">End-to-End RCM</a></li>
                                <li><a className="dropdown-item-sub" href="/">Revenue Cycle Consulting</a></li>
                                <li><a className="dropdown-item-sub" href="/">Insurance A/R Follow Up</a></li>
                                <li><a className="dropdown-item-sub" href="/">Credintialing/Contracting</a></li>
                                <li><a className="dropdown-item-sub" href="/">Denial Management </a></li>
                                <li><a className="dropdown-item-sub" href="/">Coding Service </a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-menu-start">
                            <a className="nav-link " href="/" id="Resources" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources <FaCaretDown />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-center bg-light-sub border-0 sub-item" aria-labelledby="Resources">
                                <li><a className="dropdown-item-sub" href="/">Revenuelytics Blog</a></li>
                                <li><a className="dropdown-item-sub" href="/">Webinars</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Partners</a>
                        </li>
                        <li className="nav-item dropdown dropdown-menu-start">
                            <a className="nav-link " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Company <FaCaretDown />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-center bg-light-sub border-0 sub-item" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item-sub" href="/">About Us</a></li>
                                <li><a className="dropdown-item-sub" href="/">Trust Center</a></li>
                                <li><a className="dropdown-item-sub" href="/">Careers</a></li>
                                <li><a className="dropdown-item-sub" href="/">Contact</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className={windowSize ? `nav-link` : 'nav-link btn-login'} href="/">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar