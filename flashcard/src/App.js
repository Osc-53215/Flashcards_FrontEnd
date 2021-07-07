import './App.css';
import Header from './Header';
import CreateCard from './CreateCard';
import React, { Component }  from 'react';


class App extends Component{
  
  render(){
    return (
      <div className= 'app'>
        <Header />
        <CreateCard />
      </div>
    );
  }
}

export default App;
