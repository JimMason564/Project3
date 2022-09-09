import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/LoginForm' element={<LoginForm />} />
                    <Route path='/SignupForm' element={<SignupForm />} />
                    <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>}
                    />
                </Routes>
                <Footer />
            </>
        </Router>




    );
}

export default App;
