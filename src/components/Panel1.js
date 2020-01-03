import React, { useState, useContext } from 'react'
import { WebState } from './appstate'

// Panel for Starting Acivity
const Panel1 = () => {
    //sets up context from Webstate
    const context = useContext(WebState)
    const {newActivity} = context
    
    //Hooks
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')

    //handles Sending local state back to WebState to add Activity Entry
    //Also resets state (LOCAL)
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(description !== '' && title !== ''){
            newActivity(title, description)
            setDescription('')
            setTitle('')
            setMessage('')

        }else{
            //Validation
            setMessage('Please Fill Out All Fields')
        }
    }

    //handles Description State Change (LOCAL)
    const handleChange = (e) => {
        setDescription(e.target.value)

    }

    //handles Tile State Change (LOCAL)
    const handleTitleChange = (e) => {
        setTitle(e.target.value)

    }

    return (
        <div className = 'panel1Cont'>
            <form className = 'panel1'>
                <label className="err">{message}</label>
                <label className="formelem">Title</label>
                <input className="formelem" value ={title} onChange = {handleTitleChange}type='text'></input>
                <label className="formelem">Activity Description</label>
                <input className="formelem" value ={description} onChange = {handleChange}type='text'></input>
                <button onClick ={handleSubmit} >Start Activity</button>
            </form>
        </div>
    )
}

export default Panel1
