import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Header() {
	const { setTheme } = useContext(ThemeContext);

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
	};

	return (
		<header>
			<h1>calc</h1>

			<form onChange={handleThemeChange}>
				<legend>THEME</legend>
				<input type="radio" name="theme" value="1" id="1" checked />
				<label htmlFor="1">1</label>
				<input type="radio" name="theme" value="2" id="2" />
				<label htmlFor="2">2</label>
				<input type="radio" name="theme" value="3" id="3" />
				<label htmlFor="3">3</label>
			</form>
		</header>
	);
}

export default Header;
