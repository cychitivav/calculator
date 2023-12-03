# Frontend Mentor - Calculator app solution <!-- omit in toc -->

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

## Table of contents <!-- omit in toc -->

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![screenshot preview](./design/desktop-preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/calculator-app-with-three-themes-AQkCLtEuRp)
- Live Site URL: [cristianchitiva.dev](https://cristianchitiva.dev/calculator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use variables with CSS, before I thought that it was only possible with preprocessors like SASS or LESS, but with pure CSS it is also possible.

```css
:root {
	--distance: 1rem;
}
```

Also, I strengthened my knowledge of React and the `useContext` hook, which allowed me to pass the state of one component to another without the need to use props. In addition to organizing my project folders a little better.

```js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("theme1");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
```

### Continued development

In the near future I would like to learn how to organize the folders of my projects in a better way and learn more hooks from React. I would also like to explore next.js due to its current popularity.

Another thing I would like to learn is the management of routes and how they connect to the backend.

## Author

- Website - [Cristian Chitiva](https://www.cristianchitiva.dev)
- Frontend Mentor - [@cychitivav](https://www.frontendmentor.io/profile/cychitivav)
