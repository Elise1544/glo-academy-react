import React from 'react';
import {AdditionsgWrap} from './Additions';
import {AdditionsLabel} from './Additions';
import {AdditionsCheckbox} from './Additions';

export function Choices({changeChoices, choice, openItem}) {
	return (
		<>
			<h3>Выбирайте:</h3>
			<AdditionsgWrap>
				{openItem.choices.map((item, i) => (
					<AdditionsLabel key={i}>
						<AdditionsCheckbox
							type="radio"
							name="choices"
							checked={choice === item}
							value={item}
							onChange={changeChoices}></AdditionsCheckbox>
						{item}
					</AdditionsLabel>
				))}
			</AdditionsgWrap>
		</>
	);
}
