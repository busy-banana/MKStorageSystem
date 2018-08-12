import React from 'react';
import { Drawer, List, Icon,Button } from 'antd-mobile';
import NavBars from '../../components/NavBars';
import './style.css';

export default class Home extends React.Component {
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