import React from 'react';
import '../App.css';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { IconButton } from '@mui/material';
import Star from './Star'

export default function ToDoList({ToDo, handleComplete}){

    const iconButtonStyle = {color: 'rgb(250, 211, 211)'}

    return (
        <div className="todo-list">
            {ToDo.map((ToDo) => (                           //The map function iterates through all the to do items(object) and convert it to JSX 
                <div className='todo' key = {ToDo.id}>
                    <Star ToDo={ToDo}/>
                    <p>{ToDo.content}</p>
                    <IconButton aria-label='complete' style={iconButtonStyle} size='small' onClick={() => handleComplete(ToDo.id)}>
                        <CheckOutlinedIcon/>
                    </IconButton>
                </div>
            ))}
        </div>
    )        
}