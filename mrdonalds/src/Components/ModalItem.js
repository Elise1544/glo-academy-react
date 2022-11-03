import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';

const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 20;
`;

const Modal = styled.div`
	padding-bottom: 30px;
	background-color: #fff;
	width: 600px;
	height: 600px;
`;

const Banner = styled.div`
	width: 100%;
	height: 200px;
	background-image: url(${({img}) => img});
	background-size: cover;
	background-position: center;
	margin-bottom: 20px;
`;

const Order = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 380px;
	padding: 30px;
	padding-top: 0;
`;

const Description = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: 'Pacifico', cursive;
	font-size: 30px;
	color: black;
`;

export const ModalItem = ({openItem, setOpenItem}) => {
	function closeModal(e) {
		if (e.target.id === 'overlay') setOpenItem(null);
	}

	if (!openItem) return null;
	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img}></Banner>
				<Order>
					<Description>
						<p>{openItem.name}</p>
						<p>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
					</Description>
					<Button />
				</Order>
			</Modal>
		</Overlay>
	);
};
