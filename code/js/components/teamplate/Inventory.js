import React, { Component } from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';

import './style.css';

import url1 from './img/inv1.jpg';
import url2 from './img/inv2.jpg';
import url3 from './img/inv3.jpg';

var Carousel = require('nuka-carousel');

mixins: [Carousel.ControllerMixin];
class Inventory extends Component {
  
  render() {
    const Decorators = [
      {
        component: React.createClass({
          render() {
            return (
              <button
                style={this.getButtonStyles(this.props.currentSlide === 0)}
                onClick={this.props.previousSlide}></button>
            )
          },
          getButtonStyles(disabled) {
            return {
            }
          }
        }),
        position: 'CenterLeft'
      },
      {
        component: React.createClass({
          render() {
            return (
              <button
                style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
                onClick={this.props.nextSlide}></button>
            )
          },
          getButtonStyles(disabled) {
            return {

            }
          }
        }),
        position: 'CenterRight'
      }
    ];
    return (
      <div className="inventory container">
          <Row className="row">
            <Col>
              <p className="section-title">Инвентарь</p>
            </Col>
          </Row>
        <Row>
          <Col span={20} offset={2}>
              <Carousel slidesToShow={4} decorators={Decorators} cellSpacing={30} slideWidth="245px" autoplay={true} wrapAround={true} speed={1400}> 
                <img src={url1} alt="Инвентарь1" />
                <img src={url2} alt="Инвентарь2" />
                <img src={url3} alt="Инвентарь3" />
                <img src={url1} alt="Инвентарь1" />
                <img src={url2} alt="Инвентарь2" />
                <img src={url3} alt="Инвентарь3" />
              </Carousel>
              <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Inventory;