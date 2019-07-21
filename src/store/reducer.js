import { ADD, DELETE, TOGGLE_STYLE, INIT, INPUT_CHANGE } from './actionTypes'

const defaultState = {
	inputValue: '',
	list: [],
	withAntdStyle: false,
}

// reducer is a functional method, it has NO side effect!
// reducer can take state as arg, and read it, but CAN NEVER mutate state
export default (state = defaultState, action) => {

	if (action.type === INPUT_CHANGE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

  if (action.type === INIT ) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
		return newState;
	}

	if (action.type === ADD) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if (action.type === DELETE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	if (action.type === TOGGLE_STYLE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.withAntdStyle = !newState.withAntdStyle;
		return newState;
	}

	return state;
}