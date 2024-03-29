import { Typography , Button} from '@mui/material'
import React from 'react'
import { useState } from 'react';
import "./Contact.css"

const Contact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const contactFormHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="contact">
        <div className="contactRightBar"></div>
        <div className="contactContainer">
            <form className="contactContainerForm" onSubmit={contactFormHandler}>
               <Typography variant="h4">Contact Me</Typography>
               <input type="text" placeholder='Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
               <input type="email" placeholder='Email'required value={email} onChange={(e)=>setEmail(e.target.value)}/>
               <textarea placeholder="Message" cols="30" required rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
               <Button variant="contained" type="submit">
                Send
               </Button>
            </form>
        </div>
    </div>
  )
}

export default Contact
