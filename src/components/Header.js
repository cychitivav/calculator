import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
	const { setTheme } = useContext(ThemeContext);

	const handleThemeChange = (e) => {
		setTheme(e.target.value);
		console.log(`Theme changed to ${e.target.value}`);
	};

	return (
		<header>
			<h1>calc</h1>

			<form onChange={handleThemeChange}>
				<h2>THEME</h2>
				<fieldset>
					<input type="radio" name="theme" value="1" id="1" defaultChecked />
					<label htmlFor="1">1</label>

					<input type="radio" name="theme" value="2" id="2" />
					<label htmlFor="2">2</label>

					<input type="radio" name="theme" value="3" id="3" />
					<label htmlFor="3">3</label>
				</fieldset>
			</form>
		</header>
	);
}

export default Header;
