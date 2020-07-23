/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='pt-5'>
        <div className='footer fixed-bottom p-3 font-small bg-dark text-light '>
          <div className='footer-copyright text-center '>
            Developed By
            <span className='text-warning font-weight-normal'> Forhad</span>
            ,Using{' '}
            <i className='fab fa-react'>
              {' '}
              React &amp; Redux integrated with external movies data API{' '}
            </i>
            <a href='https://www.omdbapi.com/' target='_blank'>
              {' '}
              OMDB{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
