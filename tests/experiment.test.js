import React from 'react';
import {shallow} from 'enzyme';
import {Experiment, Variant} from '../src';

describe('Experiment - shallow', () => {
	it('should render the explicitly set variant', () => {
		const component = shallow(
			<Experiment activeVariant="A" name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);

		expect(component.contains(<div>Variant A</div>)).toBe(true);
	});

	// This test needs to be tweaked cause in different times, it could fail.
	it('should render Variant A with a weight of 70', () => {
		const component = shallow(
			<Experiment weights={[70, 30]} name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);

		expect(component.contains(<div>Variant A</div>)).toBe(true);
	});

	it("should throw an error if Variants aren't included", () => {
		const component = shallow(<Experiment name="Experiment-test"></Experiment>);

		expect(component).toThrow();
	});
});

describe('Experiment - render (as HTML)', () => {});
