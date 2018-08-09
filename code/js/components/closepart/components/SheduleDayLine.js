import React from 'react';

function SheduleDayLine(props) {
	return (
		<div className="SheduleDayLine">
			<div className="SheduleDayLineTime">{props.Time}</div>
			<div className="SheduleDayLineDivRing">
				<div className={props.RingForm ? 'SheduleDayLineRing' : 'SheduleDayLineCyrcle'}></div>
				<div className={props.line ? 'SheduleDayLineVertical' : 'SheduleDayLineVerticalOff'}></div>
			</div>
			<div className="SheduleDayLineDescription">{props.SheduleDayLineDescription}</div>
		</div>
	);
}

export default SheduleDayLine;