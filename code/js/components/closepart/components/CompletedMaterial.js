import React from 'react';
import CompletedMaterialProgressLine from "./CompletedMaterialProgressLine";

function CompletedMaterial(props) {
	return (
		<div className="CompletedMaterial">
			<div className="CompletedMaterialTitle">ПРОЙДЕННЫЙ МАТЕРИАЛ</div>
			<CompletedMaterialProgressLine lessonName="Английский" pass="40 из 45" percent="50%"/>
			<CompletedMaterialProgressLine lessonName="Математика" pass="442342340 из 45" percent="23%"/>
			<CompletedMaterialProgressLine lessonName="География" pass="43242340 из 45" percent="52%"/>
			<CompletedMaterialProgressLine lessonName="Мамбсткий" pass="41230 из 45" percent="89%"/>
			<CompletedMaterialProgressLine lessonName="Русский" pass="25 из 45" percent="15%"/>
		</div>
	);
}

export default CompletedMaterial;