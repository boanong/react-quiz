import React from 'react';
import './Resultpage.css';
import { Link } from 'react-router-dom';
import { QuestionConsumer } from '../../context/Context';

export default function Resultpage() {
  return (
    <QuestionConsumer>
      {({ answer, setAns }) => {
        return (
          <div>
            <div className="container">
              <div>
                <div className="icon">
                  <i className="fa-solid fa-check" />
                </div>
                <h1 className="result">RESULTS</h1>
                <p>passed: {answer.passed}</p>
                <p>failed: {answer.failed}</p>
                <p className="message">
                  Thanks for taking out the time to answer this quiz
                </p>
                <Link to="/">
                  <button
                    className="get-started-button"
                    type="button"
                    onClick={() => setAns({ passed: 0, failed: 0 })}
                  >
                    Restart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}
