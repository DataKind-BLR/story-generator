import React from 'react';
import { Link, IndexLink } from 'react-router';
import SelectionPanel from './subcomponents/SelectionPanel';

class LeftSidebar extends React.Component{
	render(){
		return(
		<div>
			<div className="select-panel row-fluid">
				<SelectionPanel params={this.props.params} />
			</div>
		</div>
		);
	}
}

export default LeftSidebar;