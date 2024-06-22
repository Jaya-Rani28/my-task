import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';
import './App.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
