# nextjs-ab-test (WIP)
A minimal, react-friendly ab-test library built for server side rendering (SSR) and next.js

## Installation
` npm install --save nextjs-ab-test` - *Not available via NPM just yet ;)*


## Examples

### Class Component Example
```jsx
import { Experiment, Variant } from "nextjs-ab-test";

export default function(){
    return (
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
    )
}
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

- Returns:
    - Type - Object
    - Props:
        -  `Variant`
            - Type - React.Element
        - `experimentName`
            - Type - String
        - `activeVariant`
            - Type - String
        - `experimentLoaded` 
            - Type - Boolean


## Testing
We use Enzyme with Jest to test this package. To run these tests, run `npm run test` and the tests will automatically run. 

### Coverage
These tests are run using:
- Node: v14.15.4
- NPM: v7.5.6
- React: 16.13.1 and above
- Jest: 26.6.2 and above
- Enzyme: 3.11.0 and above

## Alternative Libs
- [@marvelapp/react-ab-test](https://www.npmjs.com/package/@marvelapp/react-ab-test)
- [react-ab-test](https://github.com/pushtell/react-ab-test)

## Issues
If you are experiencing any bugs or have some ideas for this package, please open up an issue in this repo. 

If its bug squashing you seek, please provide:
- NPM and Node Version
- React Version you are currently using
- What you are experiencing
- What you should be experiencing
- Any code you think that can help explain what is going on


## Contact
In order to get in contact with us, all you have to do is email [development@tastemakersafrica.com](mailto:development@tastemakersafrica.com) and we will get to you when we can. 
