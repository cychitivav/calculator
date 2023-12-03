import React from "react";
import { useComputation } from "../contexts/ComputationContext";

function Keyboard() {
	const { updateExpression } = useComputation();

	const keys = [
		"7",
		"8",
		"9",
		"DEL",
		"4",
		"5",
		"6",
		"+",
		"1",
		"2",
		"3",
		"-",
		".",
		"0",
		"/",
		"*",
		"RESET",
		"=",
	];

	return (
		<>
			<div className="keyboard">
				{keys.map((key) => (
					<input
						type="button"
						value={key}
						key={key}
						onClick={() => updateExpression(key)}
						className={
							key === "RESET" || key === "DEL"
								? "special-key"
								: key === "="
								? "equals-key"
								: ""
						}
					/>
				))}
			</div>
		</>
	);
}

export default Keyboard;
