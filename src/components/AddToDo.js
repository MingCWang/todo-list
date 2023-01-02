import { IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import React, {useState} from 'react';


const completedItems = 1;

export default function AddToDo({ToDoNumber, SetToDo}) {
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/Todos', {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({content})
        }).then(() => {
            fetch('http://localhost:8000/Todos')
            .then(res => {
                return res.json()
              })
              .then(data => {
                SetToDo(data)
              })
        })
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <IconButton aria-label='add' style = {{color: 'rgb(250, 211, 211)'}} size='large' type='submit'>
                    <AddOutlinedIcon/>
                </IconButton>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <h1> {ToDoNumber} </h1>
        </div>
  )
}
