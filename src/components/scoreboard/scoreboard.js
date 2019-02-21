import React from 'react'
import {Link} from 'react-router-dom'
import './scoreboard.css'

function scoreboard(props){

	return(
		<div id = 'scoreboard' className = {props.finished}>
			<div  id = 'score-con'>
				<h1>Score</h1>
				<h1>{props.score}</h1>
				<Link to = '/' id = 'done' className = 'btn'>Done</Link>
			</div>		
		</div>
		)
}

export default scoreboard