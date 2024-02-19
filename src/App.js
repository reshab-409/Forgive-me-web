import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Next1 from './Next1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Next1' element={<Next1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
