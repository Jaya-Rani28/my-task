import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="container">
      <h1>Task List</h1>
      <Link to="/add" className="btn btn-primary">Add Task</Link>
      <ul className="list-group mt-3">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item">
            <Link to={`/tasks/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
