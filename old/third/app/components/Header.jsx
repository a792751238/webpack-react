import React from 'react';
import avatar_img from '../images/avatar.png';
import {Icon, Avatar} from 'antd';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            collapsed,
            toggle
        } = this.props;

        return (
            <div className="layout-header">
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <span className="avatar">
                    <Avatar src={avatar_img}/>
                </span>
            </div>
        )
    }
}
export default Header;