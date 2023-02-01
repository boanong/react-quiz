/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import './Question.css';
import { Link } from 'react-router-dom';

export default function Question({ path, pageTitle, QUESTIONS, index }) {
  return (
    <div>
      <div className="container">
        <div className="sub-content">
          <div className="progress">
            <p className="number">{pageTitle}</p>
          </div>
          <p
            className="question"
            dangerouslySetInnerHTML={{ __html: QUESTIONS[index - 1].question }}
          />
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
        <Link to={path}>
          <button className="next" type="button">
            Next{' '}
          </button>
        </Link>
      </div>
    </div>
  );
}
