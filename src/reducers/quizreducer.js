
const Quiz = [{
	title: 'React Title',
	questions: [{
		question: 'Question #1',
		choices: ['a','b','c','d'],	
		rightAnswer: 'a'
	},
	{
		question: 'Question #2',
		choices: ['aa','bb','cc','dd'],
		rightAnswer: 'a'
	},
	{
		question: 'Question #3',
		choices: ['aaa','bbb','ccc','ddd'],
		rightAnswer: 'a'
	},
	{
		question: 'Question #4',
		choices: ['aaaa','bbbb','cccc','dddd'],
		rightAnswer: 'a'
	},
	{
		question: 'Question #5',
		choices: ['a','b','c','d'],
		rightAnswer: 'a'
	},
	{
		question: 'Question #6',
		choices: ['a','b','c','d'],
		rightAnswer: 'b'
	},
	{
		question: 'Question #7',
		choices: ['a','b','c','d'],
		rightAnswer: 'c'
	},
	{
		question: 'Question #8',
		choices: ['a','b','c','d'],
		rightAnswer: 'd'
	},
	{
		question: 'Question #9',
		choices: ['a','b','c','d'],
		rightAnswer: 'a'
	},
	{
		question: 'Question #10',
		choices: ['a','b','c','d'],
		rightAnswer: 'b'
	}]
}]





const quiz = (state = Quiz, action) => {
	switch(action.type){
		case 'addQuiz':
			if(action.Quiz.title === '') return state;
			state = [...state, action.Quiz];
				console.log(action.Quiz)
			break;
		case 'deleteQuiz':
			const newState = state;
			newState.splice(action.index, 1);
			state = [...newState]
			break; 
		default: return state;
	}
	return state;
}

export default quiz