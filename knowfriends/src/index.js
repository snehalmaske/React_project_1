import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {friends} from './friends';

ReactDOM.render(
	<div>
		<Card id={friends[0].image} name={friends[0].name} email={friends[0].email}/>
		<Card id={friends[1].image} name={friends[1].name} email={friends[1].email}/>
		<Card id={friends[2].image} name={friends[2].name} email={friends[2].email}/>
	</div>
,	document.getElementById('root'));


serviceWorker.unregister();
