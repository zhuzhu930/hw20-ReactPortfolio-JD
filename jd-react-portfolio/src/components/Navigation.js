import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#background"
          onClick={() => handlePageChange('Background')}

          className={currentPage === 'Background' ? 'nav-link active' : 'nav-link'}
        >
          Background
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#goals"
          onClick={() => handlePageChange('Goals')}

          className={currentPage === 'Goals' ? 'nav-link active' : 'nav-link'}
        >
          Goals
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#education"
          onClick={() => handlePageChange('Education')}

          className={currentPage === 'Education' ? 'nav-link active' : 'nav-link'}
        >
          Education
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"

          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
