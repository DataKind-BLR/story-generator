import React, { PropTypes } from 'react';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { Description, SubThemeDescription } from './views/Description';

export const App = ({ params, children }) =>
	<HeaderLayout title="CHRI Montoring Tool" logo="http://www.humanrightsinitiative.org/images/logo-orange.png" params={params}>
		<SubThemeDescription theme={params.theme} sub_theme={params.sub_theme} />
		<Description topic={params.topic} />
		{children}
	</HeaderLayout>;

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;

