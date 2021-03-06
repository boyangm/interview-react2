import React from 'react';
import {HashRouter, Redirect, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import './styles/styles.scss'
import Panel2 from './components/Panel2';
import NavBar from './components/NavBar'
import StopPanel from './components/StopPanel';
const App = (props)  =>{
  return (

   <HashRouter basename = '/'>
   <Switch>
     <Route exact path ='/' render ={(props)=> <Redirect {...props} to ='/home/start'/>} />
     <Route exact path ='/home/start' component = {Home}/>
     <Route exact path ='/activity' component = {Panel2}/>
     <Route path ='/home/stop' component = {StopPanel}/>
   </Switch>
    <NavBar></NavBar>
   </HashRouter>
  );
}

export default App;
