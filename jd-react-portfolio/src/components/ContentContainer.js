import React, { useState } from 'react';
import Navigation from './Navigation';
import Background from './pages/Background';
import Goals from './pages/Goals';
import Education from './pages/Education';
import Portfolio from './pages/Portfolio';

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
    return <Portfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // call 2 functions based on the props passed in */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
