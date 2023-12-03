import React, { useContext, useState, useEffect } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("1");

	useEffect(() => {
		const elements = document.querySelectorAll("body, body *");

		if (theme === "1") {
			elements.forEach((element) => {
				element.classList.remove("second-theme");
				element.classList.remove("third-theme");
				element.classList.add("first-theme");
			});
		} else if (theme === "2") {
			elements.forEach((element) => {
				element.classList.remove("first-theme");
				element.classList.remove("third-theme");
				element.classList.add("second-theme");
			});
		} else if (theme === "3") {
			elements.forEach((element) => {
				element.classList.remove("first-theme");
				element.classList.remove("second-theme");
				element.classList.add("third-theme");
			});
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
