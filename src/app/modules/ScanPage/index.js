import React from 'react';
import { Icon, Button, InputItem } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import './style.css';

export default class ScanPage extends AppContainer {
    constructor(props) {
        super(props);

        this.state = {
        };
        
        // ['clickLoginBtn',
        //     'onChangeUserName',
        //     'onChangePwd'
        // ].forEach((method) => {
        //     this[method] = this[method].bind(this);
        // });
    }

    render() {
        return (
            <div className="scan-container">
                <NavBars title="扫描条形码" />
            </div>
        )
    }
}