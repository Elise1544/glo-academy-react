import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/compat/auth';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// import {GoogleAuthProvider} from 'firebase/auth';
import {GlobalStyle} from './Components/Style/GlobalStyle';
import {NavBar} from './Components/NavBar/Navbar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from './Components/Modal/ModalItem';
import {Order} from './Components/Order/Order';
import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';
import {useAuth} from './Components/Hooks/useAuth';

const firebaseConfig = {
	apiKey: 'AIzaSyA5oYsXo-WMark2eAEFA3jTMdVEiEZqmy0',
	authDomain: 'mrdonalds-b60b0.firebaseapp.com',
	databaseURL: 'https://mrdonalds-b60b0-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'mrdonalds-b60b0',
	storageBucket: 'mrdonalds-b60b0.appspot.com',
	messagingSenderId: '805376298465',
	appId: '1:805376298465:web:692aa0776f0db20c1796a0',
};

const app = initializeApp(firebaseConfig);

function App() {
	const authFirebase = getAuth(app);

	const auth = useAuth(authFirebase);

	const openItem = useOpenItem();
	const orders = useOrders();

	return (
		<>
			<GlobalStyle />
			<NavBar {...auth} />
			<Order {...orders} {...openItem} {...auth}></Order>
			<Menu {...openItem} />
			{openItem.openItem && <ModalItem {...openItem} {...orders}></ModalItem>}
		</>
	);
}

export default App;
