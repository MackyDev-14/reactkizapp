import React, {useState} from 'react'
import './play.css'
import {connect} from 'react-redux'
import ScoreBoard from '../scoreboard/scoreboard'

function Choices(props){
	return(
		<label className = 'radio'>
		<input onChange = { e => props.radioOnChange(e)} type = 'radio' name = 'choice' value={props.value}/>
			{props.value}
		</label>
		)
}


	const Score = (props) => {
		if(props.indx === 9){
			return <ScoreBoard />
		}
	}

function Play({questions}){

	const [indx, setIndx] = useState({indx: 0, classname: ''});
	const [yourAnswer, setYourAnswer] = useState('');
	const [score, setScore] = useState(0);

	const radioOnChange = (e) => {
   	 console.log('selected option', e.target.value);
   	 	setYourAnswer(e.target.value)
  	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setIndx({indx: indx.indx + 1, classname: ''});
		if(indx.indx === 9){
			setIndx({indx: 0, classname: 'scoreboard'});
		}

		if(yourAnswer === questions.questions[indx.indx].rightAnswer){
			setScore(score + 1);
			console.log(yourAnswer , questions.questions[indx.indx].rightAnswer)
		}else{console.log(yourAnswer , questions.questions[indx.indx].rightAnswer)}

	}

	return(<>
		<div id= 'main'>

		<ScoreBoard score = {score} finished = {indx.classname} />

			<div id = 'submain'>

				<div id = 'question-con'>
					
					<div id = 'question'>
						{questions.questions[indx.indx].question}
					</div>

				</div>

				<div id = 'choice-con'>
					<form>
						{questions.questions[indx.indx].choices.map(
							(c,index)=> <Choices radioOnChange = {radioOnChange} 
									value = {c} key = {index} />)}
					</form>
				</div>

				<form onSubmit = {handleSubmit}>
					<button id = 'ok-btn' className = 'round btn'> Ok </button>
				</form>
				<button onClick = {() => setIndx({indx: 0, classname: 'scoreboard'})} id ='end-btn' className = 'btn' > End </button>
			</div>
		</div>
		</>)
}


const mapStateToProps = (state) => {
	return{
		questions: state.test
	}
}

const mapDispatchToProps = (dispatch) => {
	return{

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
