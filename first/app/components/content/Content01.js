/**
 * Created by easterCat on 2017/7/20.
 */

import React from 'react';
import {Layout, Button, Table, Icon, Modal} from 'antd';
const {Content} = Layout;
import {connect} from 'react-redux';
import {
    addItems
} from '../app.actions';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider"/>
      <a href="#">Delete</a>
      <span className="ant-divider"/>
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
    ),
}];


class Content01 extends React.Component {
    constructor(props) {
        super();
        this.state = {
            visibleModal: false
        };

        this.showModal = (view = true) => {
            this.setState({
                visibleModal: view
            })
        }
        this.addItem = this.addItem.bind(this);
    }


    addItem() {
        const item = {
            key: '4',
            name: 'J213n Brown',
            age: 3213,
            address: '213123',
        };

        this.props.addItems(item);
        console.log(item);
    }

    render() {
        const data = this.props.items.toJS();
        return (
            <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                <Button type="primary" onClick={this.showModal}>添加</Button>
                <Table columns={columns} dataSource={data}/>
                <Modal title="添加一行"
                       visible={this.state.visibleModal}
                       onOk={() => {
                           this.showModal(false)
                       }}
                       onCancel={() => {
                           this.showModal(false)
                       }}
                >
                    <p>12312414e</p>
                    <p>12312414e</p>
                    <p>12312414e</p>
                </Modal>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        items: state.get('app').get('items')
    }
}

const mapActionCreators = {
    addItems
};

export default connect(mapStateToProps, mapActionCreators)(Content01);