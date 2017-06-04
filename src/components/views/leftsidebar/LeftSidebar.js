import React from 'react';
import { Link, IndexLink } from 'react-router';
import { SubThemesSelector } from './subcomponents/SubThemesSelector';
import styled from 'styled-components';

const Panel = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 5px;
	border-right: 1px solid #ccc;
`;

class LeftSidebar extends React.Component {
	render() {
		return (
			<Panel>
				<SubThemesSelector params={this.props.params} />
			</Panel>
		);
	}
}

export default LeftSidebar;