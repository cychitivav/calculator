import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("1");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
