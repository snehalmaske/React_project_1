import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {friends} from './friends';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			friends: friends,
			searchfield: ''
		}
	}

	onsearchChange= (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredFriends = this.state.friends.filter(friends => {
			return friends.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

	return (
		<div className= 'tc'>
		<h1> Introducing FRIENDS Characters</h1>
		<SearchBox searchChange={this.onsearchChange} />
		<CardList friends={filteredFriends} />
		</div>
		);
	}
}

export default App;