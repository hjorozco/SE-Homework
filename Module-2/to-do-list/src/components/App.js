import { useEffect, useRef, useState } from 'react';
import ListContainer from './ListContainer';
import Form from './Form'
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);

  // When component mounts, read data from local storage and assign it  to state
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, []);

  let mount = useRef();
  useEffect(() => {
    // When component mounts do nothing
    if (!mount.current) {
      mount.current = true
      return
    }
    // When state changes, save it on local storage.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
    setTasks(tasks => [...tasks, task]);
  }

  const removeTask = taskId => {
    setTasks(tasks => tasks.filter(task => task.id !== taskId));
  }

  const changeCompleteStatus = taskId => {
    let tempTasks = tasks.slice();
    let taskIndex = tempTasks.findIndex(task => task.id === taskId);
    tempTasks[taskIndex].completed = !tempTasks[taskIndex].completed;
    setTasks(tempTasks);
  }

  return (
    <div className="App">
      <div className="AppTitle">TO DO LIST</div>
      <ListContainer
        tasks={tasks}
        removeTask={removeTask}
        changeCompleteStatus={changeCompleteStatus}
      />
      <Form
        addTask={addTask}
      />
    </div>
  );

}

export default App;
