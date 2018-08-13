import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import AppContainer from '../../modules/AppContainer';
import './style.css';

export default class NavBars extends AppContainer {
    constructor(props) {
        super(props);

        ['onLeftClick',
            'onRightClick'
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    onLeftClick() {
        this.back();
    }

    onRightClick() {
        console.log('onRightClick')
    }

    render() {
        const {
            title
        } = this.props;

        return (
            <div>
                <NavBar
                    className="navbar"
                    icon={<Icon type="left" size="lg"/>}
                    rightContent={<Icon type="ellipsis" size="lg" onClick={this.onRightClick}/>}
                    onLeftClick={this.onLeftClick}
                >
                {title}
                </NavBar>
            </div>
        )
    }
}