import React from 'react';
import {GlobalStyle} from './Components/GlobalStyle';
import {NavBar} from './Components/Navbar';
import {Menu} from './Components/Menu';

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Menu />
		</>
	);
}

export default App;
