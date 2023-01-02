
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
      method: 'DELETE'                    //DELETE operation
    })
  }

  useEffect(() => {                       // GET operation the grabs the data from the server
    fetch('http://localhost:8000/Todos')
      .then(res => {
        return res.json()
      })
      .then(data => {
        SetToDo(data)                     //Updates the state of the ToDo items
      })
  }, [completedItems])                    //This dependency enables the useEffect to render only when an item is completed 


  return (
    <div className='App'>
      <h1 className='title'>To do List</h1>
      <AddToDo ToDoNumber = {completedItems} SetToDo = {SetToDo}/>          {/*A react component that allows the user to enter to do items */}
      <ToDoList ToDo = {ToDo}  handleComplete={handleComplete}/>            {/*A react component that shows the list of to do items*/}
    </div>
  );
}


