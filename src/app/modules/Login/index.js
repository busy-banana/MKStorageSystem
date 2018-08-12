import React from 'react';
import { Drawer, List, Icon,Button, InputItem } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import DHLLogo from '../../public/dhlLogo.png';
import './style.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-logo">
                    <img src={DHLLogo}/>
                </div>
                <p className="login-title">RFID收货管理系统</p>
                <InputItem placeholder="请输入用户名" className="login-input">用户名</InputItem>
                <InputItem placeholder="请输入密码" type="password" className="login-input">密码</InputItem>
                <Button className="login-btn">登录</Button>
                <p className="login-tips">登陆遇到问题</p>
            </div>
        )
    }
}