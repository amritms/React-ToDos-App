import React from 'react'; // get react from node modules
import { render } from 'react-dom'; //import render keyword, allows us to uesr the render() function to render data on the DOM
import App from './components/app'; //get app js

// render app.js on the dom
render(<App />, document.getElementById('app'));