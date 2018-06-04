import * as React from "react";

import { Button, Checkbox, Col, Form, Icon, Input, Popconfirm, Row, Spin, Select, Table, Tooltip } from "antd";


class EditableTextCell extends React.Component<any, any> {
    /*handleChange(e) {
        const { value } = e.target;
        this.props.handleChange(value);
    }*/

    render() {
        const { editable, value } = this.props;

        return (
            <div>
                { editable ?
                    <div>
                        <Input
                            value={value}
                            onChange={e => this.handleChange(e)}
                        />
                    </div>
                    :
                    <div className="editable-row-text">
                        { value.toString() || " " }
                    </div>
                }
            </div>
        );
    }
}

export default class Diner extends React.Component<any, any> {

    columns;

    constructor(props) {
        super(props);

        this.columns = [
            {
                title: "Title",
                dataIndex: "title",
                width: "40%",
                render: (text, record, index) => this.renderTextColumn(record, index, "title", text),
                sorter: (a, b) => a._originalTitle.localeCompare(b._originalTitle),
            },
            {
                title: "Type",
                dataIndex: "type",
                width: "20%",
                render: (text, record, index) => this.renderTextColumn(record, index, "type", text),
                filters: [
                    {
                        text: "A",
                        value: "A"
                    },
                    {
                        text: "B",
                        value: "B",
                    }
                ],
                onFilter: (value, record) => record._originalType.indexOf(value) === 0,
                sorter: (a, b) => a._originalType.localeCompare(b._originalType),

            },
            {
                title: "Actions",
                dataIndex: "actions",
                render: (text, record, index) => this.renderActionColumn(record),
            },
        ];

        this.state = {
            sourceData: [
                {
                    key: 1,
                    title: "C - Test",
                    type: "A",
                    _originalTitle: "C - Test",
                    _originalType: "A"

                },
                {
                    key: 2,
                    title: "M - Test",
                    type: "A",
                    _originalTitle: "M - Test",
                    _originalType: "A"
                },
                {
                    key: 3,
                    title: "X - Test",
                    type: "B",
                    _originalTitle: "X - Test",
                    _originalType: "B"
                },
            ],
            isEditableMap: {}
        };
    }

    renderActionColumn(record) {
        const editable = this.isEditable(record);

        return (
            <div className="editable-row-operations">
                {
                    editable ?
                        <span>
                            <a onClick={() => this.handleSave(record)}>Save</a>
                        </span>
                    :
                        <span>
                            <a onClick={() => this.handleEdit(record)}>Edit</a>
                        </span>
                }
            </div>
        );
    }

    renderTextColumn(record, index, key, text) {
        const editable = this.isEditable(record);
       return (
           <EditableTextCell
                editable={editable}
                value={text}
                handleChange={value => this.handleChange(record, key, value)}
           />
       );
    }

    isEditing() {
        return Object.keys(this.state.isEditableMap).length > 0;
    }

    isEditable(record) {
        return this.state.isEditableMap[record.key];
    }

    setEditable(record) {
        const { isEditableMap } = this.state;
        isEditableMap[record.key] = true;

        this.setState({
            isEditableMap: isEditableMap
        });
    }

    setNotEditable(record) {
        const { isEditableMap } = this.state;

        delete isEditableMap[record.key];

        this.setState({
            isEditableMap: this.state.isEditableMap
        });
    }

    handleEdit(record) {
        console.log('handleEdit');
        this.setEditable(record);
    }

    handleSave(record) {
        // Save to API
        // APIUtils.saveRecord(record);
        record._originalTitle = record.title;
        record._originalType = record.type;
        this.setNotEditable(record);
    }

    handleChange(record, key, value) {
        console.log('handleChange');
        const sourceData = this.state.sourceData.map(a => Object.assign({}, a));
        //const updatedRecord = {...record, [key]:value };

        const index = sourceData.findIndex(data =>
            data.key === record.key
        );
        sourceData.splice(index, 1, updatedRecord);

        this.setState({
            sourceData: sourceData
        })
    }

    render() {
        const { sourceData } = this.state;

        return (
            <div>
                <h1>Editable sortable table</h1>
                <Table
                    dataSource={sourceData}
                    columns={this.columns}
                    locale={{
                        filterTitle: 'Filter Menu',
                        filterConfirm: 'OK',
                        filterReset: 'Reset',
                        emptyText: 'No Data',
                        selectAll: 'Select Current Page',
                        selectInvert: 'Select Invert',
                    }}
                />
            </div>
        );
    }
}
//export default Diner;