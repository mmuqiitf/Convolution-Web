import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/Untitled-4 putih.png'
import logoitenas from '../assets/img/logo-itenas-2.png'
const NavigationBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="container-fluid ps-3">
                <Link className="navbar-brand text-primary" to="/">
                    <img src={logoitenas} className="img-fluid" style={{ maxWidth: 150 + "px" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav py-3 ms-auto px-lg-5">
                        <li className="nav-item nav-item-link dropdown dropdown-xl no-caret">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownDemos" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filters
                                <i className="fas fa-chevron-right dropdown-arrow"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                aria-labelledby="navbarDropdownDemos">
                                <div className="row g-0">
                                    <div className="col-lg-12 p-3">
                                        <Link className="dropdown-item" style={{ fontSize: 25 + 'px' }} to="/noise-reduction">Noise Reduction</Link>
                                        <Link className="dropdown-item" style={{ fontSize: 25 + 'px' }} to="/sharpening">Sharpening</Link>
                                        <Link className="dropdown-item" style={{ fontSize: 25 + 'px' }} to="/edge-detection">Edge Detection</Link>
                                        <Link className="dropdown-item" style={{ fontSize: 25 + 'px' }} to="/others">Others</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-item-link dropdown dropdown-xl no-caret">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownDemos" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Documentation
                                <i className="fas fa-chevron-right dropdown-arrow"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end animated--fade-in-up"
                                aria-labelledby="navbarDropdownDemos">
                                <div className="row g-0">
                                    <div className="col-lg-12 p-3">

                                        <a className="dropdown-item" style={{ fontSize: 25 + 'px' }} href="https://online.flipbuilder.com/ogbjq/syfe/" target="_blank">Pengenalan Pengolahan Citra Digital</a>

                                        <a className="dropdown-item" style={{ fontSize: 25 + 'px' }} href="https://online.flipbuilder.com/ogbjq/tcom/" target="_blank">Pengantar Konvolusi</a>

                                        <a className="dropdown-item" style={{ fontSize: 25 + 'px' }} href="https://online.flipbuilder.com/ogbjq/vuik/" target="_blank">Cara kerja konvolusi</a>

                                        <a className="dropdown-item" style={{ fontSize: 25 + 'px' }} href="https://online.flipbuilder.com/ogbjq/uyfj/index.html" target="_blank">Kernel Filter</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-item-link">
                            <a href="https://online.flipbuilder.com/ogbjq/zuro/" target="_blank" className="nav-link">
                                Dokumentasi Penggunaan
                            </a>
                        </li>
                        <li className="nav-item nav-item-btn d-flex align-items-center">
                            <a className="btn fw-500 ms-lg-4 btn-lg btn-primary" href="#" onClick={() => props.setModalFeedbackShow(true)}>
                                Feedback
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
