import styled from 'styled-components';

export const ButtonStyled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 20px 35px;
	min-width: 250px;

	background-color: #299b01;
	border: none;

	font-family: inherit;
	font-size: 21px;
	color: #fff;

	cursor: pointer;

	&:hover {
		background-color: #35741e;
	}
`;
