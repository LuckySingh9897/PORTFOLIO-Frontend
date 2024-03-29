import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import {Event} from "@mui/icons-material"
import Typography from "@mui/material/Typography"





const  TimeLine = ({timelines = []})=> {
    console.log(timelines);
  return (

    <div>
        
        <Timeline position="alternate">
            {
                timelines.map((item,index)=>(
                    <TimelineItem key={index} >
                      <TimelineOppositeContent
                           sx={{ m: 'auto 0' }}
                           align="right"
                           variant="body2"
                           color="text.secondary"
                      >
                        1/30/24
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                           <Event/>
                        </TimelineDot>
                        <TimelineConnector/>
                      </TimelineSeparator>
                      <TimelineContent  sx={{ py: '12px', px: 2 }}>
                        <Typography varient="h6">Title</Typography>
                        <Typography>Description</Typography>
                      </TimelineContent>
                    
                    </TimelineItem>
                ))
            }

        </Timeline>

      
    </div>
  );
};

export default TimeLine;
