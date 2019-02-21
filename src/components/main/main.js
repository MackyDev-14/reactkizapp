import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './main.css'


///Options
function Options(props){
	return(
		<div id = 'playField' >
			<Link to = '/play'>
				<i 
				onClick = {() => props.setQuest(props.questions[props.index]) } 
				className='play-btn fas fa-play fa-2x'/>
			</Link>

			<div className = 'title'>{props.text}</div>

			<div>
				<button className = 'mini-btn'><i className = 'mini fas fa-edit' /></button>
				<button 
					onClick = {() => props.remove(props.index)} 
					className = 'mini-btn'>
					<i className='mini far fa-trash-alt'/>
				</button>
			</div>

		</div>)
}


///Add
function Add(props){
	return(
		<div className = 'add-con'>
			<Link to = '/edit' className='round btn'><i className="fas fa-plus" /></Link>
		</div>
		)
}


///Main
function Main(props){
	return(
		<div id = 'main' className = ''>
			<div id = 'submain'>
				{props.quizzes.map(
					(quiz, index) => 
					<Options remove = {props.deleteQuiz} 
							 key = {index}
							 index = {index}
							 text = {quiz.title}
							 questions = {props.quizzes}
							 setQuest = {props.play}
							 />)
				}
			</div>

			<Add/>

		</div>
		)
}

const mapStateToProps = (state) => {
	return {
		quizzes: state.quiz,
		tests: state.test
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addQuiz: () => {
			dispatch({
				type: 'addQuiz',
				quizTitle: 'Title 2'
			})
		},

		deleteQuiz: (index) => {
			dispatch({
				type: 'deleteQuiz',
				index: index
			})
		},

		play: (questions) => {
			dispatch({
				type: 'play',
				questions: questions
			})
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);