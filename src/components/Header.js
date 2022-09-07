import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <>
            <header className="navbar navbar-expand-md navbar-dark bd-navbar sticky-top">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                    <div className="d-lg-none"></div>

                    <a className="navbar-brand p-0 me-0 me-lg-2" href="#" aria-label="">
                        Logo goes here
                    </a>

                    <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-label="Toggle navigation">
                        <i className="bi bi-three-dots"></i>
                    </button>

                    <div className="offcanvas-lg offcanvas-end flex-grow-1" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel" data-bs-scroll="true">
                        <div className="offcanvas-header px-4 pb-0">
                            <h5 className="offcanvas-title" id="bdNavbarOffcanvasLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                        </div>

                        <div className="offcanvas-body p-4 pt-0 p-lg-0">
                            <ul className="navbar-nav flex ms-md-auto">
                                <li className="sidebar-brand"><a href="#page-top"></a></li>
                                <li className="nav-item py-2 px-3">
                                    <a href="#home" onClick={() => handlePageChange('')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item py-2 px-3">
                                    <a href="#login" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                    Login
                                    </a>
                                </li>
                                <hr>
                                </hr>
                                <ul className="nav-icons d-lg-none">
                                    <li><a></a></li>
                                    <li><a></a></li>
                                    <li><a></a></li>
                                </ul>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;