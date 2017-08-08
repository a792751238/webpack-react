/**
 * Created by easterCat on 2017/7/28.
 */

import React from 'react';
import {Avatar, Row, Col, Icon} from 'antd';
import './wechat.less';
import {connect} from 'react-redux';
import {
    getCurrentIssue,
    getIssueType
} from './chat.actions';


class WeChat extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        const {
            getCurrentIssue,
            getIssueType
        } = this.props;

        return Promise.all([
            getCurrentIssue()
        ]).then(() => {
            if (this.props.issue) {
                getIssueType(this.props.issue.get('projectId'));
            }
        })
    }

    render() {
        return (
            <div className="wechat">
                <header>问题详情</header>
                <div className="ava-con">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    <span className="name">豆豆爱吃鸡</span>
                    <span className="date">机电小组</span>
                </div>
                <p className="detail">{
                    this.props.issue ? this.props.issue.get('content') : null
                }</p>
                <ul className="pic-con">
                    <li><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/></li>
                    <li><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/></li>
                    <li><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/></li>
                </ul>
                <div className="e-form">
                    <div className="form-item">
                        <div className="label">流水号</div>
                        <div className="e-input">{
                            this.props.issue ? this.props.issue.get('timestamp') : null
                        }</div>
                    </div>
                    <div className="form-item">
                        <div className="label">类型</div>
                        <div className="e-input">{
                            this.props.issue && this.props.issue_type ? this.props.issue_type.filter(item => {
                                return item.get('_id') === this.props.issue.get('type')
                            }).getIn(['0','name']) : null
                        }</div>
                    </div>
                    <div className="form-item">
                        <div className="label">创建人单位</div>
                        <div className="e-input">上海医嘱家冬季爱搜大家哦</div>
                    </div>
                    <div className="form-item">
                        <div className="label">处理人</div>
                        <div className="e-input">刁世杰、刁世杰、刁世杰、刁世杰</div>
                    </div>
                    <div className="form-item">
                        <div className="label">图钉</div>
                        <div className="e-input">未关联</div>
                    </div>
                    <div className="form-item">
                        <div className="label">资料</div>
                        <div className="e-input"><Icon type="tag"/>阿吉豆那就是的</div>
                    </div>
                </div>
                <div className="opinion">
                    <div className="header">
                        反馈意见
                    </div>
                    <ul className="opinion-list">
                        <li className="opinion-item">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            <span className="name">豆豆爱吃鸡</span>
                            <span className="date">机电小组</span>
                        </li>
                        <li className="opinion-item">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            <span className="name">豆豆爱吃鸡</span>
                            <span className="date">哦IC回家哦is就从阿擦擦</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        issue: state.getIn(['chat', 'issue']),
        issue_type: state.getIn(['chat', 'issue_type'])
    }
}

const mapActionCreators = {
    getCurrentIssue,
    getIssueType
};

export default connect(mapStateToProps, mapActionCreators)(WeChat);