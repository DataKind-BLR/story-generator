import React from 'react';
import { Link, IndexLink } from 'react-router';
import { SubThemeList } from './SubThemeList';
import { Tabs } from '../../Tabs';
import styled from 'styled-components';
import { themes, getSubThemes } from '../../../../data';

const Container = styled.div`
	overflow: hidden;
	height: 100%;
	width: 100%;
	padding-right: 12px;
	overflow-y: scroll;
`;
export const SubThemesSelector = ({ params }) => {
	const activeTheme = (params != undefined && params.theme != undefined) ? themes.filter(t => t.url_slug === params.theme).shift() : themes[0];
	return (
		<Container>
			<h3>{(activeTheme || { description: 'Select a theme above...'}).description}</h3>
			<SubThemeList sub_themes={getSubThemes(activeTheme)} params={params} />
		</Container>
	);
}
