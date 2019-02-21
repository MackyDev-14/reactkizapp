import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './edit.css'
const newQuiz = {
		title: '',
		questions: [{
		question: '',
		choices: ['','','',''],	
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	},
	{
		question: '',
		choices: ['','','',''],
		rightAnswer: ''
	}]
}

function Choices(props){
	return(
		<label className = 'radio'>
		<input onChange = {e => props.handleAnswers(e, props.qindex)} type = 'radio' name = 'radio' value= {props.value}/>
			<input onChange = {e => props.handleRChange(e, props.qindex, props.rindex)} value = {props.value} />
		</label>
		)
}


function Play(props){
	return(
		<div id= 'main'>
			<div id = 'submain'>

				<div id = 'question-con'>
					<textarea 
						id = 'question' 
						value = {props.question}
						onChange = {e => props.handleChange(e, props.index)}
					/>
						
				</div>

				<div id = 'choice-con'>
					<form>
						{props.choices.map((r, index) => <Choices key = {index}
							qindex = {props.index}
							rindex = {index}
							handleRChange = {props.handleRChange}
							handleAnswers = {props.handleAnswers}
							value = {r} />)}
					</form>
				</div>
			</div>
		</div>
		)
}





function Edit(props){

	const [edits, setEdits] = useState(newQuiz);

	const handleAnswers = (e,qindex) => {
		var answer = edits.questions[qindex].rightAnswer;
			answer = e.currentTarget.value;
			edits.questions[qindex].rightAnswer = answer
		setEdits({...edits, questions: edits.questions})
		
	}

	const handleQChange = (e, index) => {
		var question = edits.questions[index];
		question.question = e.target.value;
		edits.questions[index] = question;
		setEdits({...edits, questions: edits.questions});
		console.log(edits.questions[index].choices)
	}

	const handleRChange = (e, qindex, rindex) => {
		var choice =  edits.questions[qindex].choices[rindex];
		choice = e.target.value;
		edits.questions[qindex].choices[rindex] = choice;
		setEdits({...edits, questions: edits.questions})
		console.log(edits.questions[qindex].choices)
	}

	const changeTitle = (x) => {

		setEdits({...edits, title: x})
	}

	return(<>
		<div id = "titletext">
			<input className = "titleinput" onChange = {(e) => changeTitle(e.target.value)} value = {edits.title} placeholder = "Title Here" />
		</div>

		{edits.questions.map((q,index) => (
			<Play
			key = {index}
			index = {index}
			question = {q.question}
			choices = {q.choices}
			handleChange = {handleQChange}
			handleRChange = {handleRChange}
			handleAnswers = {handleAnswers}
			/>
			))}

			
				<Link to = '/'><button onClick = {(e) => props.addQuiz(edits)} id = 'save-btn' className = 'round btn'> Save </button></Link>
				<Link to = '/' id = 'back-btn' className = 'btn'> Back </Link>

		</>)
}

const mapStateToProps = (state) => {
	return{
		quiz: state.quiz
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addQuiz: (newQuiz) => {
			dispatch({
				type: 'addQuiz',
				Quiz: newQuiz
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)