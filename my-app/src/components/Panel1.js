import React, { useState, useEffect, useContext } from 'react'
import { WebState } from './appstate'

const Panel1 = () => {
    const context = useContext(WebState)
    const {useInput, newActivity} = context
    const activity = useInput('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        newActivity(activity.value)
    }

    return (
        <div>
            <form>
                <label>Activity</label>
                <input {...activity} type='text'></input>
                <button onClick ={handleSubmit} >button</button>
            </form>
        </div>
    )
}

export default Panel1
