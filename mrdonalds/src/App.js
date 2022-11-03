import React from 'react';
import {GlobalStyle} from './Components/GlobalStyle';
import {NavBar} from './Components/Navbar';
import {Menu} from './Components/Menu';
import {ModalItem} from './Components/ModalItem';
import {Order} from './Components/Order';

function App() {
	const [openItem, setOpenItem] = React.useState(null);

	return (
		<>
			<GlobalStyle />
			<NavBar />
			<Order></Order>
			<Menu setOpenItem={setOpenItem} />
			<ModalItem openItem={openItem} setOpenItem={setOpenItem}></ModalItem>
		</>
	);
}

export default App;
