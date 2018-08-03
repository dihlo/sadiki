import React, { Component } from 'react';
import {connect} from 'react-redux';

import "./style.css";

import url from './img/teacher.jpg';

//const url = "./code/js/components/teamplate/img/teacher.jpg"

class TeacherItem extends Component {
	render() {
    return(
        <div className="teacher-item">
                <div className="teacher-image" style={{backgroundImage: 'url(' + url + ')'}}></div>
                <p className="teacher-name">Иванова Иванна Ивановна</p>
                <p className="teacher-job">Воспитатель-учитель</p>
                <p className="teacher-description">Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. шутки, скрытой в середине абзаца.</p>
        </div>
    )
	}
}


/*function mapStateToProps(state) {

}

function matchDispatchToProps (dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(TeacherItem);*/

export default TeacherItem;