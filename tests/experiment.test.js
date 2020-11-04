import React from 'react';
import {shallow, render} from 'enzyme';
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

	it("should render Variant B with a weight of 70", () => {
		const component = shallow(
			<Experiment weights={[30, 70]} name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);

		expect(component.contains(<div>Variant B</div>)).toBe(true);
	});

	it("should fire the experiment load function", () => {
		const experimentDidLoad = (experiment, variant) => {
			expect(typeof experiment).toBe("string");
			expect(experiment).toBe("Experiment-test");
			expect(typeof variant).toBe("string");
			expect(variant == "A" || variant == "B").toBeTruthy();
		};

		shallow(
			<Experiment onExperimentLoad={experimentDidLoad} name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);
	})
});

describe.only('Experiment - render (as HTML)', () => {
	it('should render the explicitly set variant', () => {
		const component = render(
			<Experiment activeVariant="A" name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);

		expect(component.html()).toContain("Variant A");
	});

	it.only("should render Variant B with a weight of 70", () => {
		const component = render(
			<Experiment weights={[30, 70]} name="Experiment-test">
				<Variant name="A">
					<div>Variant A</div>
				</Variant>
				<Variant name="B">
					<div>Variant B</div>
				</Variant>
			</Experiment>
		);

		expect(component.html()).toContain("Variant B");
	});
});


