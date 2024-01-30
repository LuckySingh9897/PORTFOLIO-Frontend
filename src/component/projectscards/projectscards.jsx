import React from 'react'
import { Typography } from '@mui/material'
import "./projectscards.css"
const projectscards = ({
    url="",
    title="Title Here",
    image

}) => {

  return (
    <div className="projectscard">
        <a href="">
            <img src={image} alt="video"/>
            <Typography>{title}</Typography>
        </a>
    </div>
  )
}

export default projectscards;
