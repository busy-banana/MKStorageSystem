import React from 'react';
import { Drawer, List, Icon,Button } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import AppContainer from '../../modules/AppContainer';
import './style.css';

export default class Home extends AppContainer {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBars title="条形码" />
            </div>
        )
    }
}