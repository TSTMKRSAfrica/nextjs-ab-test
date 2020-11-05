import React from "react";
import ReactDom from "react-dom";
import { Experiment, Variant } from "../src";

const TestExperiment = () => (
	<Experiment weights={[70, 30]} name="Experiment-test">
		<Variant name="A">
			<div>Variant A</div>
		</Variant>
		<Variant name="B">
			<div>Variant B</div>
		</Variant>
	</Experiment>
);

ReactDom.render(
	<TestExperiment />,
	document.getElementById("root")
);
