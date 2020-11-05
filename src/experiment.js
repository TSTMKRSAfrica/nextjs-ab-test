import React, {useReducer, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
	ExperimentDispatcherContext,
	ExperimentStateContext,
	initialExperimentState,
	experimentReducer,
	reducerEvents
} from './experiment-context';

const sortedVariantsAndWeights = (variantsWithWeights) => {
	let sortedVariants = variantsWithWeights.map(variant => Object.keys(variant)[0]).sort((a, b) => a - b);

	let sortedWeights = variantsWithWeights.map(variant => variant[Object.keys(variant)[0]]).sort(a, b => a - b);

	let sortedVariantsWithWeights = variantsWithWeights.sort((a, b) => a - b);

	return {
		sortedVariants, 
		sortedWeights,
		sortedVariantsWithWeights
	}
}

function selectVariant(variantsWithWeights, dispatch) {

	const { sortedVariants, sortedWeights } = sortedVariantsAndWeights(variantsWithWeights);

	// eslint-disable-next-line unicorn/no-reduce
	const weightSum = sortedWeights.reduce((a, b) => a + b, 0);

	// A random number between 0 and weightSum
	let weightedIndex = Math.floor(Math.random() * weightSum);

	// Iterate through the sorted weights, and deduct each from the weightedIndex.
	// If weightedIndex drops < 0, select the variant. If weightedIndex does not
	// drop < 0, default to the last variant in the array that is initially assigned.
	let selectedVariant = sortedVariants[sortedVariants.length - 1];
	for (const [index, weight] of sortedWeights.entries()) {
		weightedIndex -= weight;
		if (weightedIndex < 0) {
			selectedVariant = sortedVariants[index];
		}
	}

	dispatch({type: reducerEvents.setActiveVariant, variant: selectedVariant});
}

function Experiment({
	children,
	name,
	activeVariant,
	weights = [50, 50],
	onExperimentLoad = () => console.log('Experiment Loaded')
}) {
	const [state, dispatch] = useReducer(
		experimentReducer,
		initialExperimentState
	);

	useEffect(() => {
		if (activeVariant) {
			onExperimentLoad(name, activeVariant);
		}

		if (state.activeVariant) {
			onExperimentLoad(name, state.activeVariant);
		}

		if (!activeVariant && !state.activeVariant) {
			const variantsWithWeights = state.variantsProvided.map((variant, i) => ({
				[variant]: weights[i]
			}));

			selectVariant(variantsWithWeights, dispatch);
		}
	}, [state.activeVariant, activeVariant]);

	return (
		<ExperimentDispatcherContext.Provider value={dispatch}>
			<ExperimentStateContext.Provider value={state}>
				{!state.activeVariant && !activeVariant ? (
					<>{children}</>
				) : (
					<>
						{activeVariant &&
							children.find((child) => child.props.name === activeVariant)}
						{state.activeVariant &&
							children.find(
								(child) => child.props.name === state.activeVariant
							)}
					</>
				)}
			</ExperimentStateContext.Provider>
		</ExperimentDispatcherContext.Provider>
	);
}

Experiment.propTypes = {
	children: PropTypes.node,
	name: PropTypes.string.isRequired,
	weights: PropTypes.arrayOf(PropTypes.number),
	onExperimentLoad: PropTypes.func,
	activeVariant: PropTypes.string
};

export default Experiment;
