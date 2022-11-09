import React from 'react';
import styled from 'styled-components';
import trashIcon from '../../image/trash.svg';
import {totalPriceItems} from '../functions/secondaryFunction';
import {formatCurrency} from '../functions/secondaryFunction';

const OrderItemStyled = styled.li`
	display: flex;
	flex-wrap: wrap;
	margin: 15px 0;
	cursor: pointer;
`;

const ItemName = styled.span`
	flex-grow: 1;
`;

const ItemPrice = styled.span`
	margin-left: 20px;
	margin-right: 10px;
	min-width: 65px;
	text-align: right;
`;

const TrashButton = styled.button`
	width: 24px;
	height: 24px;
	border-color: transparent;
	background-color: transparent;
	background-image: url(${trashIcon});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	cursor: pointer;
`;

const Toppings = styled.div`
	color: #9a9a9a;
	fon-size: 14px;
	width: 100%;
`;

export const OrderListItem = ({order, deleteItem, index, setOpenItem}) => {
	const topping = order.topping
		.filter((item) => item.checked)
		.map((item) => item.name)
		.join(', ');

	const refDeleteButton = React.useRef(null);

	return (
		<OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
			<ItemName>
				{order.name} {order.choice}
			</ItemName>
			<span>{order.count}</span>
			<ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}></TrashButton>
			{topping && <Toppings>Допы: {topping}</Toppings>}
		</OrderItemStyled>
	);
};
