import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SetSearchResults from '../components/SetSearchResults';
import SetSearchForm from '../components/SetSearchForm';

import Auth from '../utils/auth';

const Home = () => {
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!searchInput) {
    //         return false;
    //     }
    //     try {
    //         const { loading, data } = useQuery(GET_SETS, {
    //             // pass URL parameter
    //             variables: { Name },
    //         });

    //         setSearchInput('');
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    // const { loading, data } = useQuery(GET_SETS);
    // const sets = data?.sets || [];

    // const searchSets = data?.sets || [];
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
            <div className="container mb-5">
                <div className='row'>
                    <h1 className='mb-3'>Search for your favorite Lego Sets!</h1>
                    <p>Type something into the search box to find the sets you're interested in</p>
                    <div className='col-7'>
                        <SetSearchForm />
                    </div>
                </div>
            </div>
            <div className='container mb-5 mb-153'>
                <div className="row d-flex">
                    <h2>Results:</h2>
                    <SetSearchResults
                        // sets={sets}
                    />
                </div>
            </div>
        </>
    );
}

export default Home;