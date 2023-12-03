import React from "react";

import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

import { ThemeProvider } from "./contexts/ThemeContext";
import { ComputationProvider } from "./contexts/ComputationContext";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<ComputationProvider>
				<form id="interface">
					<Display />
					<Keyboard />
				</form>
			</ComputationProvider>
		</ThemeProvider>
	);
}

export default App;
