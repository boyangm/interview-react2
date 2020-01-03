import React from 'react';
import Home from './components/home'
const App = (props)  =>{
  return (
   <div>
    <Home {...props}></Home>
   </div>
  );
}

export default App;
