import React from 'react';
import './Resultpage.css';
import { Link } from 'react-router-dom';

export default function Resultpage() {
  return (
    <div>
      <div className="container">
        <div>
          <div className="icon">
            <i className="fa-solid fa-check" />
          </div>
          <h1 className="result">RESULTS</h1>
          <p className="message">
            Thanks for taking out the time to answer this quiz. We appreciate!
          </p>
          <Link to="/">
            <button className="button" type="button">
              {' '}
              Restart{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
