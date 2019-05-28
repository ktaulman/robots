import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import cards 
import {robots} from './robots';//use {robots} not robots b/c of multiple key:value pairs.
import CardList from './CardList';

//formatting import
import 'tachyons';
import * as serviceWorker from './serviceWorker';

//What Appears on the Webpage
ReactDOM.render(
    <CardList robots={robots}/>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
