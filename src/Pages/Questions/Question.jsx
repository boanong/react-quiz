import React from 'react';
import './Question.css';
import { Link } from 'react-router-dom';

export default function Question() {
  return (
    <div>
      <div className="container">
        <div className="sub-content">
          <div className="progress">
            <p className="number">1/11</p>
          </div>
          <p className="question">Groundnut is harvested from trees</p>
          <div className="buttons">
            <div>
              <button className="button" type="button">
                True
              </button>
            </div>
            <div>
              <button className="button" type="button">
                False
              </button>
            </div>
          </div>
        </div>
        <Link to="/resultpage">
          <button className="next" type="button">
            Next{' '}
          </button>
        </Link>
      </div>
    </div>
  );
}
