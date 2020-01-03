import React from 'react'
import Panel1 from './Panel1'
import Panel2 from './Panel2'

//our home Page
const Home = (props) => {

    return (
        <div className='homeCont'>
            <h1 className='title'>Time Keeper</h1>
            <h3 className='title'>Enter Activity Below & Start Activity</h3>
            <Panel1 ></Panel1>


        </div>
    )
}


export default Home




