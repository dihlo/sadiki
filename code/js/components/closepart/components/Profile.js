import React from 'react';
import SubMenu from "./SubMenu";
import {Link, IndexLink} from 'react-router';

function Profile(props) {
	return (
		<div className="background">
			<SubMenu />
			Профиль Дорофей Афанасьевич
		</div>	
	);
}

export default Profile;