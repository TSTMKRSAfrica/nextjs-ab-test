import {createContext} from 'react';

export const ExperimentDispatcherContext = createContext();
export const ExperimentStateContext = createContext();

export const reducerEvents = {
	addVariant: 'ADD_VARIANTS',
	setActiveVariant: 'SET_ACTIVE_VARIANT',
	setWeight: 'SET_WEIGHT'
};

export const initialExperimentState = {
	activeVariant: null,
	weights: [50, 50],
	variantsProvided: []
};

export function experimentReducer(state, action) {
	switch (action.type) {
		case reducerEvents.addVariant:
			return {
				...state,
				variantsProvided: [...state.variantsProvided, action.variants]
			};
		case reducerEvents.setActiveVariant:
			return {...state, activeVariant: action.variant};
		case reducerEvents.setWeight:
			return {...state, weights: action.weights};
		default:
			break;
	}
}
