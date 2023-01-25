import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landingpage/Landing';
import Question from './Pages/Questions/Question';
import Resultpage from './Pages/Resultpage/Resultpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index path='/' element= {<Landing/>}/>
        <Route  path='/question' element= {<Question/>}/>
        <Route  path='/resultpage' element= {<Resultpage/>}/>



      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
