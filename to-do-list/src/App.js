import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Sidebar from './components/Sidebar';
import Bodytodo from './components/Bodytodo';
import Bodycompleted from './components/Bodycompleted';
import data from './components/data';

function App() {
  const [tasks, setTasks] = useState(data)

  const leftcount = tasks.filter(tasks => !tasks.completed).length
  const donecount = tasks.filter(tasks => tasks.completed).length

  function complete(id) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.taskid === id ? { ...task, completed: !task.completed } : task
      })
    })
  }

  const taskstodo = tasks.map(tasks => {
    return (!tasks.completed &&
      <Tasks
        key={tasks.taskid}
        heading={tasks.heading}
        desc={tasks.desc}
        type={tasks.type}
        date={tasks.date}
        completed={tasks.completed}
        handleTask={() => complete(tasks.taskid)}
      />
    )
  })


  const taskscompleted = tasks.map(tasks => {
    return (tasks.completed &&
      <Tasks
        key={tasks.taskid}
        heading={tasks.heading}
        desc={tasks.desc}
        type={tasks.type}
        date={tasks.date}
        completed={tasks.completed}
        handleTask={() => complete(tasks.taskid)}
      />
    )
  })


  return (
    <div className="App">
      <Header />
      <div className='todobody'>
        <Sidebar />
        <div className='tasksbody'>
          <Bodytodo
            count={leftcount}
          />
          <div className='taskdisplay'>
            {taskstodo}
          </div>
          <Bodycompleted
            count={donecount}
          />
          <div className='taskdisplay'>
            {taskscompleted}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
