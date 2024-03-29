import React from 'react';
import {AdditionsgWrap} from './Additions';
import {AdditionsLabel} from './Additions';
import {AdditionsCheckbox} from './Additions';

export function Toppings({toppings, checkToppings}) {
	return (
		<>
			<h3>Добавки</h3>
			<AdditionsgWrap>
				{toppings.map((item, i) => (
					<AdditionsLabel key={i}>
						<AdditionsCheckbox
							type="checkbox"
							checked={item.checked}
							onChange={() => checkToppings(i)}></AdditionsCheckbox>
						{item.name}
					</AdditionsLabel>
				))}
			</AdditionsgWrap>
		</>
	);
}
