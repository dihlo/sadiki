import React from 'react';
import { Button, Row, Col, Popconfirm } from 'antd';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './style.css';

const mapState = { center: [62.0314359, 129.7127935], zoom: 16};

class MapContacts extends React.Component {

  render() {
    return (
      <YMaps>
        <div id="map-basics">
            <Map state={mapState} width={-1} height={522} scrollwheel={false}>
            <Placemark
                    geometry={{
                    coordinates: [62.0314359, 129.7127935]
                    }}
                    properties={{
                    hintContent: 'Здесь находится детский сад "Доракс"',
                    balloonContent: 'Здесь находится детский сад "Доракс"'
                    }}
                    options={{
                    iconLayout: 'default#image',
                    iconImageHref: './images/logo.svg',
                    iconImageSize: [50, 70],
                    iconImageOffset: [-3, -42]
                    }}
                />
            </Map>
            <div className="map-info">
                <p className="map-title">Детский сад "Доракс"</p>
                <div className="map-info-content">
                    <p>г. Якутск, ул. Кулаковского 48, кв. 632</p>
                    <p>49-69-69</p>
                </div>
            </div>
        </div>
      </YMaps>
    );
  }
}

export default MapContacts;
