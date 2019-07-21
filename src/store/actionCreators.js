import {INPUT_CHANGE, DELETE, INIT, ADD, TOGGLE_STYLE} from './actionTypes';

export const getInputChangeAction = (value) => ({
	type: INPUT_CHANGE,
	value
});

export const getAddItemAction = () => ({
	type: ADD
});

export const getDeleteItemAction = (index) => ({
	type: DELETE,
	index
});

export const initListAction = (data) => ({
	type: INIT,
	data
});

export const getToggleStyleAction = () => ({
	type: TOGGLE_STYLE
});