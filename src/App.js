import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import Play from './components/play/play';
import ScoreBoard from './components/scoreboard/scoreboard';
import Edit from './components/edit/edit'

function App(){
  return(<>
  	<BrowserRouter>
  		<div>
	    	<Sidebar />

	    	<Route path = '/' component = {Main} exact />
	    	<Route path = '/play' component = {Play} />
	    	<Route path = '/score' component = {ScoreBoard} />
	    	<Route path = '/edit' component = {Edit} />

		</div>
	 </BrowserRouter>
    </>)
}

export default App;
