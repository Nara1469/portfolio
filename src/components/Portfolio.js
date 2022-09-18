import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Project':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
