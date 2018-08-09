import React from 'react';
import SheduleDayLine from "./SheduleDayLine";

function SheduleDay(props) {
	return (
		<div className="SheduleDay">
			<div className="SheduleDayTitle">РАСПИСАНИЕ ЗАНЯТИЙ</div>
			<div className="SheduleDayDay">
				<div className="SheduleDayDayData">На сегодня, 9 июня, Пятница</div>
				<div className="SheduleDayDayTomorrow">Расписание на завтра</div>
			</div>

			<SheduleDayLine Time="08:00 - 09:00" line={true} RingForm={false} SheduleDayLineDescription="Утренняя зарядка, движение и игра"/>
			<SheduleDayLine Time="09:00 - 10:00" line={true} RingForm={true} SheduleDayLineDescription="Еще описалово"/>
			<SheduleDayLine Time="08:00 - 09:00" line={true} RingForm={false} SheduleDayLineDescription="Утренняя зарядка, движение и игра"/>
			<SheduleDayLine Time="08:00 - 09:00" line={true} RingForm={false} SheduleDayLineDescription="Утренняя зарядка, движение и игра"/>
			<SheduleDayLine Time="08:00 - 09:00" line={true} RingForm={false} SheduleDayLineDescription="Утренняя зарядка, движение и игра"/>
			<SheduleDayLine Time="08:00 - 09:00" line={false} RingForm={false} SheduleDayLineDescription="Утренняя зарядка, движение и игра"/>
		</div>
	);
}

export default SheduleDay;

