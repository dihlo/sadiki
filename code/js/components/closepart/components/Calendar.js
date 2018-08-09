import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../css/calendar.css';

const WEEKDAYS_LONG = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
};
const WEEKDAYS_SHORT = {
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
};
const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
};
const FIRST_DAY_OF_WEEK = {
  ru: 1,
};
// Translate aria-labels
const LABELS = {
  ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
};

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            locale: 'ru'
        }
    }
    
    switchLocale(e) {
        const locale = e.target.value || 'en';
        this.setState({ locale });
    };

    

    render() { 
        const { locale } = this.state;
        const modifiers = {
            birthday: new Date(2017, 6, 19),
        };
        return (
            <div className="calendar">
                <div className="calendar__background">
                   <DayPicker
                    locale={locale}
                    months={MONTHS[locale]}
                    weekdaysLong={WEEKDAYS_LONG[locale]}
                    weekdaysShort={WEEKDAYS_SHORT[locale]}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
                    labels={LABELS[locale]} fixedWeeks  modifiers={modifiers}
                    />
                </div>
            </div>
        );
    }
}

export default Calendar;