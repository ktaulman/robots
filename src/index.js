import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import cards 
import Card from "./Card";
import {robots} from './robots';//use {robots} not robots b/c of multiple key:value pairs.

//formatting import
import 'tachyons';
import * as serviceWorker from './serviceWorker';

//What Appears on the Webpage
ReactDOM.render(
    
    <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    </div>
, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
