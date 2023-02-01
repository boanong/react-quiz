import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Landing from './Pages/Landingpage/Landing';
import Question from './Pages/Questions/Question';
import Resultpage from './Pages/Resultpage/Resultpage';
import getData from './api/Api';

function App() {
  const [questions, setQuestions] = useState();
  useEffect(() => {
    getData()
      .then((res) => setQuestions([...res]))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(questions);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route
            path="/question1"
            element={
              <Question
                pageTitle="Question 1"
                path="/question2"
                QUESTIONS={questions}
                index={1}
              />
            }
          />
          <Route
            path="/question2"
            element={
              <Question
                pageTitle="Question 2"
                path="/question3"
                QUESTIONS={questions}
                index={2}
              />
            }
          />
          <Route
            path="/question3"
            element={
              <Question
                pageTitle="Queston 3"
                path="/question4"
                QUESTIONS={questions}
                index={3}
              />
            }
          />
          <Route
            path="/question4"
            element={
              <Question
                pageTitle="Question 4"
                path="/question5"
                QUESTIONS={questions}
                index={4}
              />
            }
          />
          <Route
            path="/question5"
            element={
              <Question
                pageTitle="Question 5"
                path="/question6"
                QUESTIONS={questions}
                index={5}
              />
            }
          />
          <Route
            path="/question6"
            element={
              <Question
                pageTitle="Question 6"
                path="/question7"
                QUESTIONS={questions}
                index={6}
              />
            }
          />
          <Route
            path="/question7"
            element={
              <Question
                pageTitle="Question 7"
                path="/question8"
                QUESTIONS={questions}
                index={7}
              />
            }
          />
          <Route
            path="/question8"
            element={
              <Question
                pageTitle="Question 8"
                path="/question9"
                QUESTIONS={questions}
                index={8}
              />
            }
          />
          <Route
            path="/question9"
            element={
              <Question
                pageTitle="Question 9"
                path="/question10"
                QUESTIONS={questions}
                index={9}
              />
            }
          />
          <Route
            path="/question10"
            element={
              <Question
                pageTitle="Question 10"
                path="/resultpage"
                QUESTIONS={questions}
                index={10}
              />
            }
          />
          <Route path="/resultpage" element={<Resultpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
