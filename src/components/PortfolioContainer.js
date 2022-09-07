import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="d-flex flex-column h-100">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <Footer />
    </div>

  );
}
