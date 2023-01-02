
import './App.css';
import React, {useEffect, useState} from 'react';
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'

// json-server --watch data/db.json --port 8000


export default function App() {

  const [ToDo, SetToDo] = useState([])
  const [completedItems, setCompletedItems] = useState(0)

  function handleComplete(id){
    setCompletedItems(prevCompletedItems => prevCompletedItems + 1)
    fetch('http://localhost:8000/Todos/' + id, {
      method: 'DELETE'
    })
  }

  useEffect(() => {
    fetch('http://localhost:8000/Todos')
      .then(res => {
        return res.json()
      })
      .then(data => {
        SetToDo(data)
      })
  }, [completedItems])


  return (
    <div className='App'>
      <h1 className='title'>To do List</h1>
      <AddToDo ToDoNumber = {completedItems} SetToDo = {SetToDo}/>
      <ToDoList ToDo = {ToDo}  handleComplete={handleComplete}/>
    </div>
  );
}


