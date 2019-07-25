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
	render(){
return (
		<div className= 'tc'>
		<h1> Introducing FRIENDS Characters</h1>
		<SearchBox />
		<CardList friends={this.state.friends} />
		</div>
		);
	}
}

export default App;