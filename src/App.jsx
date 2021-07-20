import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css'
import AddTask from './componentes/AddTask';
import Header from './componentes/Header';
import Tasks from './componentes/Tasks';
import TaskDetails from './componentes/TaskDetails';

const App = () =>{
  //const message = 'Hello world'

  const  [tasks, setTasks] = useState([
    {
      id: '1',
      title:'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title:'ler Livros',
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data)
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId)return{...task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];
    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }

return (
  <Router>
  <div className="container"> 
  <Header />
 <Route path="/"exact render={() =>(
   <>
<AddTask  handleTaskAddition ={handleTaskAddition} />
  <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
     handleTaskRemove={handleTaskRemove}/>
   </>
 )}/>   
 <Route path="/:taskTitle" exact component={TaskDetails}/>
 </div>
  </Router>
 );
}



export default App;



