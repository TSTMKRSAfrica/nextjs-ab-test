import React from 'react';
import {shallow, mount} from 'enzyme';
import {Experiment, useExperiment, Variant} from '../src';

const testArray = (length = 4) => Array.from({length});

describe('Experiment Component', () => {
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
	// Actually that is what we expect due to the weights provided.
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

	it('should render Variant B with a weight of 70', () => {
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

	it('should render variant A based on its weights out of 4 runs', () => {
		let component;
		let variantARenders = 0;
		const testArray_ = testArray();

		testArray_.forEach(() => {
			component = shallow(
				<Experiment weights={[70, 30]} name="Experiment-test">
					<Variant name="A">
						<div>Variant A</div>
					</Variant>
					<Variant name="B">
						<div>Variant B</div>
					</Variant>
				</Experiment>
			);

			if (component.contains(<div>Variant A</div>)) {
				variantARenders += 1;
			}
		});

		expect(variantARenders / testArray_.length).toBeGreaterThanOrEqual(0.75);
	});

	it('should render variant B based on its weights out of 4 runs', () => {
		let component;
		let variantBRenders = 0;
		const testArray_ = testArray();

		testArray_.forEach(() => {
			component = shallow(
				<Experiment weights={[30, 70]} name="Experiment-test">
					<Variant name="A">
						<div>Variant A</div>
					</Variant>
					<Variant name="B">
						<div>Variant B</div>
					</Variant>
				</Experiment>
			);

			if (component.contains(<div>Variant B</div>)) {
				variantBRenders += 1;
			}
		});

		expect(variantBRenders / testArray_.length).toBeGreaterThanOrEqual(0.75);
	});

	it('should fire the experiment load function', () => {
		const experimentDidLoad = (experiment, variant) => {
			expect(typeof experiment).toBe('string');
			expect(experiment).toBe('Experiment-test');
			expect(typeof variant).toBe('string');
			expect(variant == 'A' || variant == 'B').toBeTruthy();
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
	});
});

describe("useExperiment hook", () => {
	it("should render a variant", () => {
		const NameTag = () => {
			const { Variant } = useExperiment({
				name: "Experiment-test",
				variants: {
					A: <div>Ash</div>,
					B: <div>Gary</div>
				},
			});

			return (
				<div>
					<Variant />
				</div>
			)
		};

		const component = mount(<NameTag />);

		expect(component.contains(<div>Ash</div>) || component.contains(<div>Gary</div>)).toBe(true);
	});

	it("should render the variant name", () => {
		const NameTag = () => {
			const { variantName } = useExperiment({
				name: "Experiment-test",
				variants: {
					A: <div>Ash</div>,
					B: <div>Gary</div>
				},
			});

			return (
				<div>
					{variantName}
				</div>
			)
		};

		const component = mount(<NameTag />);

		expect(component.contains("A") || component.contains("B")).toBe(true);
	});

	// Need a better way of checking if variables are being exposed and are there.
	// it("should expose the variant name,  experiment name, and check if experiment has loaded", () => {
	// 	const NameTag = () => {
	// 		const { variantName, experimentName, experimentLoaded, Variant } = useExperiment({
	// 			name: "Experiment-test",
	// 			variants: {
	// 				A: <div>Ash</div>,
	// 				B: <div>Gary</div>
	// 			}
	// 		});

	// 		return (
	// 			<div>
	// 				<Variant />
	// 			</div>
	// 		)
	// 	};
	// })
});


