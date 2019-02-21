

const playReducer = (state = [], action) => {
	switch(action.type){
		case 'play': 
			state = action.questions;
			break;
		default: return state;
	}
	return state;
}

export default playReducer