import React, {useState} from 'react';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { IconButton } from '@mui/material';
import '../App.css';

export default function Star(){

    const iconButtonStyle = {color: 'rgb(250, 211, 211)'}

    const [star, setStar] = useState(false)
    function toggleStarred(){
        setStar(prevStarred => !prevStarred)
    }
    
    return (
        <IconButton aria-label='starred' style={iconButtonStyle} size='small' onClick={() => toggleStarred()} >
            {star ? <StarOutlinedIcon/> : <StarOutlineOutlinedIcon/>}
        </IconButton>
    )
   
}
