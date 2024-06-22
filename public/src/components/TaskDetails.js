import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/edit/${task._id}`} className="btn btn-primary">Edit</Link>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
};

export default TaskDetails;
