# nextjs-ab-test (WIP)
A minimal, react-friendly ab-test library built for server side rendering (SSR) and next.js

## Installation
` npm install --save nextjs-ab-test` - *Not available via NPM just yet ;)*


## Examples

### Class Component Example
```jsx
import { Experiment, Variant } from "nextjs-ab-test";

<Experiment name="Experiment-test">
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
```

### Hook Example
```jsx
import { useExperiment } from "nextjs-ab-test";

const TestExperiment = () => {
	const { Variant } = useExperiment({
		name: "Experiment-test",
		variants: {
			A: <div>Variant A</div>,
			B: <div>Variant B</div>
		}
	});

	return (
		<div>
			<Variant />
		</div>
	)
}
```

## API Reference

### `<Experiment />`
The main container component. Requires the `<Variant />` as a child.

- Props: 
    -	`name`:
    	- Type - String
    	- *Required*
    - `activeVariant`:
    	- Type - String
    	- Needed if you want to set a default variant
    	- *Optional*
    - `weights`:
    	- Type - Array of Numbers
    	- Example - `[70, 30]`
    	- Default - `[50, 50]`
    	- *Optional*
    - `onExperimentLoad`:
    	- Type - Function
    	- Example - `<Experiment onExperimentLoad={(name, activeVariant) => console.log(name, activeVariant)} />`
    	- Returns: 
    	    - `name` - The name of the experiment
    	    - `activeVariant` - The active variant that is currently showing
    	- *Optional*


### `<Variant />`

- Props:
    - `name`:
    	- Type - String
    	- *Required*
	
### `useExperiment`

- Params:
    - Type - Object
    - Props: 
        -	`name`:
    	    - Type - String
    	    - *Required*
        - `activeVariant`:
        	- Type - String
        	- Needed if you want to set a default variant
        	- *Optional*
        - `weights`:
        	- Type - Array of Numbers
        	- Example - `[70, 30]`
        	- Default - `[50, 50]`
        	- *Optional*
    	- `variants`:
    	    - Type - Object
    	    - Note - Key should be the name of the variant and Value should be the Component to render
    	    - Example - `{ A: <div>Variant A</div>, B: <div>Variant B</div> }`
    	    - *Required*



