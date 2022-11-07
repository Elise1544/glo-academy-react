import React from 'react';
import styled from 'styled-components';
import {ButtonStyled} from '../Style/Button';
import {CountItem} from './countItem';
import {useCount} from '../Hooks/useCount';
import {totalPriceItems} from '../functions/secondaryFunction';
import {formatCurrency} from '../functions/secondaryFunction';

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

const Context = styled.div`
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

const TotalPriceItem = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
	const counter = useCount();

	const closeModal = (e) => {
		if (e.target.id === 'overlay') setOpenItem(null);
	};

	const order = {
		...openItem,
		count: counter.count,
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
		setOpenItem(null);
	};

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img}></Banner>
				<Context>
					<Description>
						<p>{openItem.name}</p>
						<p>{formatCurrency(openItem.price)}</p>
					</Description>
					<CountItem {...counter}></CountItem>
					<TotalPriceItem>
						<span>Цена:</span>
						<span>{formatCurrency(totalPriceItems(order))}</span>
					</TotalPriceItem>
					<ButtonStyled onClick={addToOrder}>Добавить</ButtonStyled>
				</Context>
			</Modal>
		</Overlay>
	);
};
