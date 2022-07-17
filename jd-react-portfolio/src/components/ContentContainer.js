import React, { useState } from 'react';
import Navigation from './Navigation';
import Background from './pages/Background';
import Goals from './pages/Goals';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Background');

  // Render pages based on the state:
  const renderPage = () => {
    if (currentPage === 'Background') {
      return <Background />;
    }
    if (currentPage === 'Goals') {
      return <Goals />;
    }
    if (currentPage === 'Education') {
      return <Education />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Projects />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='contentContainer'>
      {/* // call 2 functions based on the props passed in */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
