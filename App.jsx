// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Form from './Form';
import FormDetails from './FormDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<FormDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
