import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { Button, Row, Col} from 'antd';
import './style.css';

class News extends Component {
  
  render() {
    return (
      <Row className="news">
            <Col>
                <p className="section-title">Новости детского сада</p>
            </Col>
            <Row type="flex" justify="space-around">
                <Col span={6}>
                    <NewsItem />
                </Col>
                <Col span={6}>
                    <NewsItem />
                </Col>
                <Col span={6}>
                    <NewsItem />
                </Col>
            </Row>
            <Col>
                <button className="all-news-button">ВСЕ НОВОСТИ</button>
            </Col>
      </Row>
    );
  }
}

export default News;