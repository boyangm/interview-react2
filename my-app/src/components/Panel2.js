import React, { useState, useEffect, useContext } from 'react'
import { WebState } from './appstate'

// Activity Grid Component
const Panel2 = (props) => {
    //sets up context from Webstate
    const context = useContext(WebState)
    const { activities, handleEnd, currentTime, duration, handleTimeState } = context

    return (
        <div className='activityCont'>
            <h3>Activity Table</h3>
            <table >
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
                            <tr key={activities.indexOf(activity)}>
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

                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Panel2
