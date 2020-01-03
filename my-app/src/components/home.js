import React from 'react'
import Panel1 from './Panel1'
import Panel2 from './Panel2'

const Home = (props) => {
    
    return (
        <div>
            <Panel1 {...props}></Panel1>
            <Panel2 {...props}></Panel2>


        </div>
    )
}


export default Home




