import React, { useState } from "react";
import Header from "./components/Header";

export const ThemeContext = React.createContext();

function App() {
	const [theme, setTheme] = useState("1");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Header />
		</ThemeContext.Provider>
	);
}

export default App;
