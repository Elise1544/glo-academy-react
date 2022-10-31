import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {NavBar} from './Components/Navbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0; 
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Pacifico, cursive;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			{/* <div className="App">
				<h1>Hello React</h1>
			</div> */}
		</>
	);
}

export default App;
