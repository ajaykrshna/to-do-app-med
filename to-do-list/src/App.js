import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Bodytodo from './components/Bodytodo';
import Bodycompleted from './components/Bodycompleted';
import Addtask from './components/Addtask';
import SidebarTitles from './components/SidebarTitles';
import EditTask from './components/EditTask';
import { useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  const [id, setId] = useState(tasks.length + 1)

  const leftcount = tasks ? tasks.filter(tasks => !tasks.completed).length : 0
  const donecount = tasks ? tasks.filter(tasks => tasks.completed).length : 0

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

  function editTaskOld(formData) {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        return task.taskid === formData.taskid ? { ...formData } : task
      })
    })
    console.log(tasks)
  }
  /////////////////////////

  /////////////////////////

  function delData(id) {
    setTasks(prevTasks => {
      return prevTasks.filter(task => !(task.taskid === id))
    })
  }

  /////////////////////////
  const taskstodo = tasks.map(tasks => {
    return (!tasks.completed &&
      <Tasks
        key={tasks.taskid}
        taskid={tasks.taskid}
        heading={tasks.heading}
        desc={tasks.desc}
        type={tasks.type}
        date={tasks.date}
        completed={tasks.completed}
        handleTask={() => complete(tasks.taskid)}
        handleEdit={() => getData(tasks.taskid)}
        handleDelete={() => delData(tasks.taskid)}
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
        handleDelete={() => delData(tasks.taskid)}
        handleTask={() => complete(tasks.taskid)}
      />
    )
  })

  const [showAddtask, setShowAddTask] = useState(false)
  function handleAddTask() {
    edit ? setEdit(prev => !prev) :setShowAddTask(prevState => !prevState)
  }

  return (
    <div className="App">
      <div className='todobody'>
        <div className='sidebar'>
          <SidebarTitles
            tasks={tasks}
          />
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
        <button className='buttonadd' onClick={handleAddTask}>{showAddtask || edit ? "Cancel" : "Add Task"}</button>
        {showAddtask &&
          <Addtask
            handleAddTask={addTaskNew}
          />
        }
        {
          edit &&
          <EditTask
            handleEditTask={editTaskOld}
            formData={formData}
          />
        }
      </div>
    </div>
  );
}

export default App;
