import React, { useState, useEffect, useContext } from 'react'
import { WebState } from './appstate'

const Panel2 = (props) => {
    const context = useContext(WebState)
    const {activities, handleEnd} = context
    const [currentTime, setCurrentTime] = useState(new Date())

    const duration =  (item) =>{
        const {today} =item
        const startDate = new Date(today)
        const endDate = new Date(item.endDate)
        
        if(item.endTime ){
         return handleTimeState(startDate,endDate)
         }else{

             return handleTimeState(today);
         }
        
        
    } 

    const handleTimeState=(starttime, endTime = currentTime) => {
        const time1 = new Date(starttime)
        const time2 = new Date(endTime)
        const seconds = Math.floor((time2-time1)/1000);
        const minutes = Math.floor(seconds/60)
        const hours = Math.floor(minutes/60)
        const remainderSeconds = seconds % 60
        if(remainderSeconds < 10){
            return `${hours}:${minutes}:0${remainderSeconds}`

        }else{
            return `${hours}:${minutes}:${remainderSeconds}`
        }
    }

    const endActivity = (event,key ) =>{
        event.preventDefault()

       handleEnd(key, currentTime) 
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(new Date ())
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Duration</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        activities.map(activity => (
                    <tr key ={activities.indexOf(activity)}>
                            <td>
                                {activity.time}
                            </td>
                            <td>
                                {activity.endTime || ''}
                            </td>
                            <td>
                                {duration(activity)}
                            </td>
                            <td>
                                {activity.description}
                            </td>
                            <button onClick ={(e)=> endActivity(e, activities.indexOf(activity))}>End Activity</button>
                    </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Panel2
