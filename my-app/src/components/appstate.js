import React, { useState } from 'react'


export const WebState = React.createContext()

export const Provider = (props) => {
    const [activities, setActivities] = useState(JSON.parse(sessionStorage.getItem('Activity')) || [])

    const newActivity = (data) => {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(`${data} started at ${time}`)
        const item = {
            time,
            today,
            description: data,

        }
        setActivities((prevState) => {
            sessionStorage.setItem('Activity', JSON.stringify([...prevState, item]))
            return [...prevState, item]


        })

    }
    const handleEnd = (key, time) => {
        setActivities(prevState => {
            const endDate = new Date(time)
            const endTime = endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();
            const entry = { ...prevState[key], endTime, endDate }
            const filteredArr = prevState.filter(activity => activity !== prevState[key])
            sessionStorage.removeItem('Activity');
            sessionStorage.setItem('Activity', JSON.stringify([...filteredArr, entry]))
            return [...filteredArr, entry]


        })
    }


    return (
        <WebState.Provider value={{
            newActivity,
            activities,
            handleEnd
        }}>

            {props.children}
        </WebState.Provider>
    )
}