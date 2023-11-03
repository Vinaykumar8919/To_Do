
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
