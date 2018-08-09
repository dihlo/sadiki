import React from 'react';


function CompletedMaterialProgressLine(props) {
	return (
		<div className="CompletedMaterialProgressLine">
			<div className="TitleProgressLine">
				<div className="TitleProgressLineTitle">{props.lessonName}</div>
				<div className="TitleProgressLineOneOf">{props.pass}</div>
			</div>
			<div className="ProgressLine">
				<div style={{"width": props.percent}} className="ProgressBar"></div>
			</div>
		</div>
	);
}

export default CompletedMaterialProgressLine;