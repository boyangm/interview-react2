import React, { useState } from 'react'


export const WebState = React.createContext()

export const Provider = (props) => {
    const [activities, setActivities] = useState(JSON.parse(sessionStorage.getItem('Activity'))|| [])
    
    const newActivity = (data) => {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(`${data} started at ${time}`)
        const item = {
            time, 
            activity: data
        }
        setActivities((prevState) =>{
                sessionStorage.setItem('Activity',JSON.stringify([...prevState,item]))
                return [...prevState,item]
                

        })
    
    }
    const useInput = (initialvalue) => {
        const [inputs, setInputs] = useState(initialvalue);
        const handlevaluechange = (e) => {
            setInputs(e.target.value)

        }
        return {
            value: inputs,
            onChange: handlevaluechange
        }

    }



    return (
        <WebState.Provider value={{ 
            useInput,
            newActivity,
            activities
        }}>

            {props.children}
        </WebState.Provider>
    )
}