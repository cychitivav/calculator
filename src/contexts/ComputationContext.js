import React, { useContext, useState } from "react";
import { evaluate } from "mathjs";

const ComputationContext = React.createContext();

export function ComputationProvider({ children }) {
	const [expression, setExpression] = useState("");

	const updateExpression = (value) => {
		switch (value) {
			case "DEL":
				if (expression === "Syntax Error") {
					setExpression("0");
				} else {
					setExpression(expression.slice(0, -1));
				}
				break;
			case "RESET":
				setExpression("");
				break;
			case "=":
				try {
					setExpression(evaluate(expression));
				} catch {
					setExpression("Syntax Error");
				}
				break;
			default:
				if (expression === "Syntax Error") {
					setExpression(value);
				} else {
					setExpression(expression + value);
				}
		}
	};

	return (
		<ComputationContext.Provider value={{ expression, updateExpression }}>
			{children}
		</ComputationContext.Provider>
	);
}

export function useComputation() {
	return useContext(ComputationContext);
}