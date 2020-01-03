import React, { useState, useEffect } from 'react'

//exported WebState to be used with Context Hooks
export const WebState = React.createContext()

//Holds the state of our App to pass data to diff components
export const Provider = (props) => {
    //Hooks
    const [activities, setActivities] = useState(JSON.parse(sessionStorage.getItem('Activity')) || [])
    const [currentTime, setCurrentTime] = useState(new Date())

    //stores an Activity Entry
    const newActivity = (title, description) => {
        const today = new Date();
        let hours = today.getHours()
        if (hours < 10) {
            hours = `0${hours.toString()}`
        }
        let minutes = today.getMinutes()
        if (minutes < 10) {
            minutes = `0${minutes.toString()}`
        }
        let seconds = today.getSeconds()
        if (seconds < 10) {
            seconds = `0${seconds.toString()}`
        }
        const time = hours + ":" + minutes + ":" + seconds;
        const item = {
            time,
            today,
            title,
            description

        }
        setActivities((prevState) => {
            sessionStorage.setItem('Activity', JSON.stringify([...prevState, item]))
            return [...prevState, item]


        })

    }
    //Adds an End time to Activity
    const handleEnd = (key, time) => {
        setActivities(prevState => {
            const endDate = new Date(time)
            let hours = endDate.getHours()
            if (hours < 10) {
                hours = `0${hours.toString()}`
            }
            let minutes = endDate.getMinutes()
            if (minutes < 10) {
                minutes = `0${minutes.toString()}`
            }
            let seconds = endDate.getSeconds()
            if (seconds < 10) {
                seconds = `0${seconds.toString()}`
            }
            const endTime = hours + ":" + minutes + ":" + seconds;
            const entry = { ...prevState[key], endTime, endDate }
            const filteredArr = prevState.filter(activity => activity !== prevState[key])
            sessionStorage.removeItem('Activity');
            sessionStorage.setItem('Activity', JSON.stringify([...filteredArr, entry]))
            return [...filteredArr, entry]


        })
    }

    //calculates the duration of the Activity
    const handleTimeState = (starttime, endTime = currentTime) => {
        const time1 = new Date(starttime)
        const time2 = new Date(endTime)
        let seconds = Math.floor((time2 - time1) / 1000) || 0;
        let minutes = Math.floor(seconds / 60) || 0
        if (minutes < 10) {
            minutes = `0${minutes.toString()}`
        }
        let hours = Math.floor(minutes / 60) || 0
        if (hours < 10) {
            hours = `0${hours.toString()}`
        }
        let remainderSeconds = seconds % 60
        if (remainderSeconds < 10) {
            remainderSeconds = `0${remainderSeconds.toString()}`
        }
        return `${hours}:${minutes}:${remainderSeconds}`

    }

    //gets the Dates to calculate duration
    const duration = (item) => {
        const { today } = item
        const startDate = new Date(today)
        const endDate = new Date(item.endDate)

        if (item.endTime) {
            return handleTimeState(startDate, endDate)
        } else {

            return handleTimeState(today);
        }


    }
    //Auto updates the Date for State
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <WebState.Provider value={{
            newActivity,
            activities,
            handleEnd,
            currentTime,
            handleTimeState,
            duration
        }}>

            {props.children}
        </WebState.Provider>
    )
}