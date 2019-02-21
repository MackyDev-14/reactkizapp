import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css'

function Hamburger(props){

	return(

	<button onClick = {props.toggleClass} id = 'ham' className = {props.classname}>
		<span/>
		<span/>
		<span/>
	</button>

		)
	}


function Navs(){
	return(
		<nav>
			<div>
				<li><Link to = '/'>Load</Link></li>
				<li>Stats</li>
				<li>Settings</li>
				<li>Log out</li>
			</div>
		</nav>
		)
}


function Sidebar(){

	const [toggle, setToggle] = useState({isOpen: false, classname: '', expand: ''});

	const toggleClass = () => {

		if(!toggle.isOpen){		
			setToggle({isOpen: !toggle.isOpen, classname: '', expand: ''});
		}else{
			setToggle({isOpen: !toggle.isOpen, classname: 'open', expand: 'expand'});
		}

	}

	return(
		<div>
			<Hamburger 
				toggleClass = {toggleClass}
				classname = {toggle.classname}

			/>

			<div id = 'sidebar'  className = {toggle.expand} >		
				<Navs />
			</div>

		</div>)

	}

export default Sidebar;