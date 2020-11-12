import React from 'react';
import ReactDom from 'react-dom';
import {Experiment, useExperiment, Variant} from '../src';

const TestExperiment1 = () => (
	<Experiment weights={[70, 30]} name="Experiment-test">
		<Variant name="A">
			<div>Variant A</div>
		</Variant>
		<Variant name="B">
			<div>Variant B</div>
		</Variant>
	</Experiment>
);

const TestExperiment2 = () => {
	const { Variant } = useExperiment({
		variants: {
			A: <div>Ash</div>,
			B: <div>Gary</div>
		},
		name: "Experiment-test"
	});

	return (
		<div>
			<Variant />
		</div>
	)
}

const Example = () => (
	<>
		<TestExperiment1 />
		<TestExperiment2 />
	</>
)

ReactDom.render(<Example />, document.querySelector('#root'));
