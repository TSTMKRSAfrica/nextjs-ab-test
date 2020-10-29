import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { ExperimentDispatcherContext, reducerEvents } from "./experiment-context";

function Variant({ name, children }){
  const dispatch = useContext(ExperimentDispatcherContext);

  useEffect(() => {
    dispatch({ type: reducerEvents.addVariant, variants: name })
  }, [dispatch, name])

  return (
    <>
      {children}
    </>
  )
}

Variant.propTypes = {
  name: PropTypes.string
}

export default Variant;


