import React from 'react';
import SubMenu from "./SubMenu";
import {Link, IndexLink} from 'react-router';

function Quit(props) {
	return (
		<div className="background">
			<SubMenu />
			Выход
		</div>	
	);
}

export default Quit;