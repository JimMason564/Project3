import React from 'react';

function Home() {
    return (
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="slide-one-bg" aria-hidden="true"></div>

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <img className="" src=""
                                alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="slide-two-bg" aria-hidden="true"></div>

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <img className="" src=""
                                alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;