import React from 'react';

const Home = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
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
            <div className="container mb-5 mb-153">
            <div className='row'>
                <h1 className='mb-3'>Search for your favorite Lego Sets!</h1>
                <p>Type something into the search box to find the sets you're interested in</p>
                <div className='col-7'>
                <form onSubmit={""} className="needs-validation" novalidate>
                    <input
                        type='text'
                        name='search_sets'
                        class='form-control form-control-lg' 
                        placeholder='Enter Set Name'
                        value={""}
                        onChange={"handleChange"}
                        required
                    />
                    <div className="invalid-feedback">
                        Please enter a valid email.
                    </div>

                    <button type="submit" class="btn btn-blue mt-3">Search</button>
                    
                </form>
                </div>
                </div>
            </div>
        </>
    );
}

export default Home;