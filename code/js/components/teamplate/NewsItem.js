import React, { Component } from 'react';

import './style.css';

import url from './img/inv1.jpg';

class NewsItem extends Component {
    render() {
    return(
        <div className="news-item">
            <a href="#">
                <p className="news-title">Запущен сайт нашего сада</p>
                <p className="news-date">17 июля 2017, 12:04</p>
                <div className="news-image" style={{backgroundImage: 'url(' + url + ')'}}></div>
                <p className="news-text">Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и про</p>
            </a>
        </div>
    )
    }
}

export default NewsItem;