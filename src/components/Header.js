import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = (e) => {
		switch (e.target.value - theme) {
			case 1:
				document.documentElement.style.setProperty("--distance", "-1.2rem");
				break;
			case 2:
				document.documentElement.style.setProperty("--distance", "-2.4rem");
				break;
			case -1:
				document.documentElement.style.setProperty("--distance", "1.2rem");
				break;
			case -2:
				document.documentElement.style.setProperty("--distance", "2.4rem");
				break;
			default:
				document.documentElement.style.setProperty("--distance", "0");
		}

		e.target.style.animation = "move 1s ease 1 normal";

		setTimeout(() => {
			e.target.style.animation = "";
		}, 1000);
		setTheme(e.target.value);
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
