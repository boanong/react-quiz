import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { QuestionProvider } from './context/Context';
import Landing from './Pages/Landingpage/Landing';
import Question from './Pages/Questions/Question';
import Resultpage from './Pages/Resultpage/Resultpage';
import getData from './api/Api';

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getData()
      .then((res) => setQuestions([...res]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [answer, setAns] = useState({ passed: 0, failed: 0 });

  return (
    <div className="App">
      <QuestionProvider value={{ questions, answer, setAns }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />

            <Route path="/question/:id" element={<Question />} />

            <Route path="/resultpage" element={<Resultpage />} />
          </Routes>
        </BrowserRouter>
      </QuestionProvider>
    </div>
  );
}

export default App;
