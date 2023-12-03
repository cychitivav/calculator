import React from "react";
import { useComputation } from "../contexts/ComputationContext";

function Display() {
	const { expression } = useComputation();

	return (
		<>
			<output>{expression ? expression.toLocaleString() : "0"}</output>
		</>
	);
}

export default Display;
