import React from 'react';
import { Icon, Button, InputItem } from 'antd-mobile';
import AppContainer from '../../modules/AppContainer';
import DHLLogo from '../../public/dhl-logo.png';
import './style.css';

export default class Login extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        };
        
        ['clickLoginBtn',
            'onChangeUserName',
            'onChangePwd'
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    clickLoginBtn() {
        if (!this.state.userName) {
            this.showToast('用户名不能为空');
        } else if (!this.state.password) {
            this.showToast('密码不能为空');
        }
    }

    onChangeUserName(value) {
        const userName = value;
        this.setState({
            userName
        });
    }

    onChangePwd(value) {
        const password = value;
        this.setState({
            password
        });
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-logo">
                    <img src={DHLLogo}/>
                </div>
                <p className="login-title">RFID收货管理系统</p>
                <InputItem 
                    placeholder="请输入用户名"
                    className="login-input"
                    onChange={this.onChangeUserName}
                    clear={true}
                >
                    用户名
                </InputItem>
                <InputItem
                    placeholder="请输入密码"
                    type="password"
                    className="login-input"
                    onChange={this.onChangePwd}
                    clear={true}
                >
                    密码
                </InputItem>
                <Button 
                    className="login-btn"
                    activeClassName="active-login-btn"
                    onClick={this.clickLoginBtn}
                >
                    登录
                </Button>
                <p className="login-tips">登陆遇到问题</p>
            </div>
        )
    }
}