import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {
    Route,
    NavLink
} from 'react-router-dom'
const {Header, Sider, Footer} = Layout;

import Content01 from './content/Content01';
import Content02 from './content2/Content02';
import Content03 from './content3/Content03';
import Content04 from './content4/Content04';
import './app.less';

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: false
        }

        this.toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed
            });
        }
        console.dir(Promise);
    }

    componentWillMount() {
        const {history} = this.props;
        history.replace('/content');
    }

    render() {
        return (
            <div>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">easterCat</div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <NavLink to="/content" activeStyle={{color: 'white'}}>
                                    <Icon type="user"/>
                                    <span>React Router</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/content2" activeStyle={{color: '#fff'}}>
                                    <Icon type="video-camera"/>
                                    <span>LeoAshin</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/content3" activeStyle={{color: '#fff'}}>
                                    <Icon type="upload"/>
                                    <span>justjavac</span>
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to="/content4" activeStyle={{color: '#fff'}}>
                                    <Icon type="upload"/>
                                    <span>React Training</span>
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Route path="/content" component={Content01}/>
                        <Route path="/content2" component={Content02}/>
                        <Route path="/content3" component={Content03}/>
                        <Route path="/content4" component={Content04}/>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}




export default App;