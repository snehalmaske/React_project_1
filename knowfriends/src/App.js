import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/snehalmaske/user')
      .then(response=> response.json())
      .then(user => {this.setState({ friends: user})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(friends =>{
      return friends.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
          <h1 className='f1'>Introduction to FRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList friends={filteredFriends} />
          </Scroll>
        </div>
      );
  }
}

export default App;