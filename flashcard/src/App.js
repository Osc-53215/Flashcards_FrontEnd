import './App.css';
import Header from './Header';
import CreateCard from './CreateCard';
import React, { Component }  from 'react';
import axios from 'axios';


class App extends Component{

  flashcard = {
      flashcards: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/flashcard').then(res => {
      this.setState({flashcards: res.data})
    })
  }
  
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
