import React, { PropTypes } from 'react';
import { HeaderLayout } from '../layouts/HeaderLayout';
import { Description, SubThemeDescription } from './views/Description';

export const App = ({ params, children }) =>
	<HeaderLayout title="CHRI Legal Aid Montoring Tool" logo="http://www.humanrightsinitiative.org/images/logo-orange.png" params={params}>
		{children}
	</HeaderLayout>;

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;

