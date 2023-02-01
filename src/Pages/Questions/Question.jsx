/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import './Question.css';
import { Link, useParams } from 'react-router-dom';
import { QuestionConsumer } from '../../context/Context';

export default function Question() {
  const params = useParams();
  const pageindex = +params.id;

  return (
    <QuestionConsumer>
      {({ questions, answer, setAns }) => {
        const validatAns = (ans, correctAns) => {
          if (ans === correctAns) {
            setAns({ passed: answer.passed + 1, failed: answer.failed });
          } else {
            setAns({ passed: answer.passed, failed: answer.failed + 1 });
          }
        };

        const disableBtns = () => {
          document.querySelectorAll('.button').forEach((btn) => {
            btn.disabled ? (btn.disabled = false) : (btn.disabled = true);
          });
        };

        const handleClick = (target) => {
          validatAns(target, questions[pageindex - 1].correct_answer);
          disableBtns();
        };
        return (
          <div>
            {questions.length > 0 && (
              <div className="container">
                <div className="sub-content">
                  <div className="progress">
                    <p className="number">Question {pageindex}</p>
                  </div>
                  <p
                    className="question"
                    dangerouslySetInnerHTML={{
                      __html: questions[pageindex - 1].question,
                    }}
                  />
                  <div className="buttons">
                    <div>
                      <button
                        className="button"
                        type="button"
                        value="True"
                        onClick={(e) => {
                          handleClick(e.target.value);
                        }}
                      >
                        True
                      </button>
                    </div>
                    <div>
                      <button
                        className="button"
                        type="button"
                        value="False"
                        onClick={(e) => {
                          handleClick(e.target.value);
                        }}
                      >
                        False
                      </button>
                    </div>
                  </div>
                </div>
                <Link
                  to={
                    pageindex === 10
                      ? '/resultpage'
                      : `/question/${pageindex + 1}`
                  }
                >
                  <button
                    className="next"
                    type="button"
                    onClick={() => disableBtns()}
                  >
                    Next
                  </button>
                </Link>
              </div>
            )}
            ;
          </div>
        );
      }}
    </QuestionConsumer>
  );
}
