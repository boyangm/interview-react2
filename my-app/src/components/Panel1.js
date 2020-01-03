import React, { useState, useContext } from 'react'
import { WebState } from './appstate'

const Panel1 = () => {
    const context = useContext(WebState)
    const {newActivity} = context
    const [description, setDescription] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        newActivity(description)
        setDescription('')
    }
    const handleChange = (e) => {
        setDescription(e.target.value)

    }

    return (
        <div>
            <form>
                <label>Activity</label>
                <input value ={description} onChange = {handleChange}type='text'></input>
                <button onClick ={handleSubmit} >button</button>
            </form>
        </div>
    )
}

export default Panel1
