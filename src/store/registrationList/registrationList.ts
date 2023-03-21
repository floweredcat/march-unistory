import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const initialState = {
	entities: [],
	status: 'idle',
};

export const registrationListSlice = createSlice({
	name: 'registrationList',
	initialState,
	reducers: {
		startLoading() {
			return {
				entities: [],
				status: 'loading',
			};
		},
		successLoading(_, action) {
			return {
				entities: action.payload,
				status: 'success',
			};
		},
		failLoading() {
			return {
				entities: [],
				status: 'fail',
			};
		},
	},
});

export const registrationListSliceActions = registrationListSlice.actions;
