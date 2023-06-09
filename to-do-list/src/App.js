import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Bodytodo from './components/Bodytodo';
import Bodycompleted from './components/Bodycompleted';
import data from './components/data';
import Addtask from './components/Addtask';
import SidebarTitles from './components/SidebarTitles';
import EditTask from './components/EditTask';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  const [id, setId] = useState(tasks.length + 1)

  const leftcount = tasks.filter(tasks => !tasks.completed).length
  const donecount = tasks.filter(tasks => tasks.completed).length

  function complete(id) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.taskid === id ? { ...task, completed: !task.completed } : task
      })
    })
  }

  function addTaskNew(formData) {
    setTasks(prevTasks => {
      return [
        ...prevTasks,
        {
          ...formData,
          taskid: id
        }
      ]
    })
    setId(prevId => prevId + 1)
    console.log(tasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  /////////////////////////

  const [formData, setFormData] = useState({})
  const [edit, setEdit] = useState(false)

  function getData(id) {
    setFormData(tasks.filter((task) => task.taskid === id)[0])
    setEdit(p => !p)
  }
  /////////////////////////
  const sidebarinfo = tasks.map(tasks => {
    return (
      <SidebarTitles
        key={tasks.taskid}
        title={tasks.heading}
        date={tasks.date}
      />
    )
  })

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
        handleEdit={() => getData(tasks.taskid)}
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
        handleEdit={() => getData(tasks.taskid)}
        handleTask={() => complete(tasks.taskid)}
      />
    )
  })

  const [showAddtask, setShowAddTask] = useState(false)
  function handleAddTask() {
    setShowAddTask(prevState => !prevState)
  }

  return (
    <div className="App">
      <div className='todobody'>
        <div className='sidebar'>
          {sidebarinfo}
        </div>
        <div className='tasksbody'>
          <Header />
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
      <div className='addtask'>
        <button className='buttonadd' onClick={handleAddTask}>{showAddtask ? "Cancel" : "Add Task"}</button>
        {showAddtask &&
          <Addtask
            handleAddTask={addTaskNew}
          />
        }
        {
          edit &&
          <EditTask
            handleAddTask={addTaskNew}
            formData={formData}
          />
        }
      </div>
    </div>
  );
}

export default App;
