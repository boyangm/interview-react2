import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import './styles/styles.scss'
import Panel2 from './components/Panel2';
import NavBar from './components/NavBar'
import StopPanel from './components/StopPanel';
const App = (props)  =>{
  return (

   <BrowserRouter>
   <Switch>
     <Route exact path ='/interview-react2/' render ={(props)=> <Redirect {...props} to ='/interview-react2/home/start'/>} />
     <Route exact path ='/interview-react2/home/start' component = {Home}/>
     <Route exact path ='/interview-react2/activity' component = {Panel2}/>
     <Route path ='/interview-react2/home/stop' component = {StopPanel}/>
   </Switch>
    <NavBar></NavBar>
   </BrowserRouter>
  );
}

export default App;
