import { Button, Typography } from '@mui/material'
import React from 'react'
import {AiOutlineProject} from "react-icons/ai"
import { FaRegSmileWink } from "react-icons/fa";
import { Delete } from '@mui/icons-material'
import "./Projects.css"


const ProjectCard=({

    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin= false,
})=>{

    return (
        <>
        <a href={url} className="projectCard" target="blank">
            <div>
                <img src={projectImage} alt="project1"/>
               <Typography variant="h5">{projectTitle}</Typography>
            </div>
            <div>
                <Typography variant="h4">About Project</Typography>
                <Typography>{description}</Typography>
                <Typography variant="h6">Tech Stack : {technologies}</Typography>
            </div>
        </a>
        {
            isAdmin && (
                <Button style={{ color: "rgba(40,40,40,0.7)" }}>
                    <Delete/>
                </Button>
            )
        }
        
        
        
        </>
    )
}
const Projects = () => {
    const projects=[1,2,3,4]
  return (
    <div className="projects">
        <Typography variant="h3">
            Projects <AiOutlineProject/>
        </Typography>
        <div className="projectsWrapper">
            {projects.map((project,index)=>(
                <ProjectCard 
                  url="https://github.com/LuckySingh9897/Chat-App"
                  projectImage="https://img.freepik.com/free-vector/artificial-intelligence-isometric-icon-server-room-datacenter-database-concept_39422-772.jpg?size=626&ext=jpg&ga=GA1.2.1056822155.1704042142&semt=ais"
                  projectTitle="Realtime Chat-App"
                  description="This is real time chat Application"
                  technologies="Mongodb, HTML, javascript ,CSS, React,NodeJs, Express "
                  key={index}

                />
            ))}
        </div>
        <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>

  
  )
}

export default Projects
