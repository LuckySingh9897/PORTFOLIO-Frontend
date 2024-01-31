import React from 'react'

import "./About.css"
import { Typography } from '@mui/material'
import profile from "../../images/profile.jpg"

const About = () => {
  return (
   <div className="about">
    <div className="aboutContainer1">
        <Typography>This is a Sample Quote</Typography>
    </div>
    <div className="aboutContainer2">
    <div>
        <img src={profile} alt="profile-photo" className="aboutAvatar"/>
        <Typography variant="h4" style={{margin:"1vmax 0", color:"black"}}>Lucky Singh</Typography>
        <Typography>Full Stack Developer</Typography>
        <Typography style={{margin:"1vmax 0"}}>I am Competitive Programmer</Typography>
        <Typography>(Specialist) at Codeforces</Typography>

    </div>
    <div>
        <Typography
        style={{
            wordSpacing:"5px",
            lineHeight:"50px",
            letterSpacing:"5px",
            textAlign:"right"

        }}
        >This is Description Lorem ipsum dolor 
            sit amet consectetur adipisicing elit. 
            Minus nam rem eligendi, facere accusantium placeat
             adipisci? Officiis quaerat eos delectus porro!</Typography>

    </div>

    </div>
   </div>
  )
}

export default About
