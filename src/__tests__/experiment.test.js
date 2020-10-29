import React from "react";
import { render } from "@testing-library/react";
import { Experiment, Variant } from "../";

describe("<Variant />", () => {
	it("Loads chosen variant", async () => {
		const { getByText } = render(
			<Experiment name="Experiment 1" activeVariant="A">
				<Variant name="A">
					<div>
						Variant A
					</div>
				</Variant>
				<Variant name="B">
					<div>
						Variant B
					</div>
				</Variant>
			</Experiment>
		);

		expect(getByText("Variant A")).toBeInTheDocument();
	});

	it("doesn't select the second variant when selecting a variant", async () => {
		const { getByText } = render(
			<Experiment name="Experiment 1" activeVariant="A">
				<Variant name="A">
					<div>
						Variant A
					</div>
				</Variant>
				<Variant name="B">
					<div>
						Variant B
					</div>
				</Variant>
			</Experiment>
		);

		expect(getByText("Variant B")).toBeUndefined();
	});
})
