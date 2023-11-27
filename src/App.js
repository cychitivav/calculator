import React, { useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

export const ThemeContext = React.createContext();

function App() {
	const [theme, setTheme] = useState("1");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Header />
			<form>
				<Display />
				<Keyboard />
			</form>
		</ThemeContext.Provider>
	);
}

export default App;
