import React from 'react'
import {Link} from "react-router-dom"
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css"
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div className="footer">
        <div>
            <Typography variant="h5">About Me</Typography>
            <Typography>
                Hey, my name is Lucky Singh . I am a fullstack Developer and a competitive programmer
            </Typography>
            <Link to="/contact" className="footerContactBtn">
                 <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant="h6">Social Media</Typography>
            <a href="https://github.com/LuckySingh9897" target="blank">
                <BsGithub/>
            </a>
            <a href="https://www.linkedin.com/in/lucky-singh-77ab4120a/" target="blank">
                <BsLinkedin/>
            </a>
            <a href="" target="blank">
                <BsInstagram/>
            </a>
        </div>

    </div>
  )
}

export default Footer
