import React, { useState, useContext } from 'react'
import { WebState } from './appstate'

//Panel for stopping Activity
const Panel3 = () => {
    //sets up context from Webstate
    const context = useContext(WebState);
    const { activities, handleEnd, currentTime } = context;

    //Hooks

    const [options, setOptions] = useState(0)
    const [description, setDescription] = useState('')
    //handles state of Select/Option (LOCAL)
    const handleChange = (event) => {
        const { value } = event.target
        setOptions(value)
        console.log(value)
        setDescription(activities[value].description)

    }

    //sends index of activity and endTime back to Webstate
    const endActivity = (event, key) => {
        event.preventDefault()

        handleEnd(key, currentTime)
    }
    return (
        <div className="panel3Cont">
            <div className="panel3">
                <label className="formelem">Title:</label>
                <select className="formelem" value={options} onChange={handleChange}>
                    {
                        activities.map(activity => (
                            <option key={activities.indexOf(activity)} value={activities.indexOf(activity)}>{activity.title}</option>

                        ))
                    }

                </select>

                <label className="formelem">Description:</label>
                <p>{description}</p>
                <button onClick={(e) => endActivity(e, options)}>End Activity</button>
            </div>
        </div>
    )
}

export default Panel3
