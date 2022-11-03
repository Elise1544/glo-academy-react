import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import {ListItem} from './ListItem';
import BannerImg from '../../image/banner.png';

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;
	margin-left: 380px;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;

const BannerStyle = styled.div`
	width: 100%;
	height: 210px;
	background-image: url(${BannerImg});
	background-size: cover;
	background-position: center;
`;

export const Menu = ({setOpenItem}) => (
	<MenuStyled>
		<BannerStyle></BannerStyle>
		<SectionMenu>
			<h2>Бургеры</h2>
			<ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}></ListItem>
		</SectionMenu>

		<SectionMenu>
			<h2>Закуски / Напитки</h2>
			<ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}></ListItem>
		</SectionMenu>
	</MenuStyled>
);
