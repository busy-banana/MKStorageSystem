import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './style.css';

export default class NavBars extends React.Component {
    constructor(props) {
        super(props);
    }

    onLeftClick() {
        console.log('onLeftClick')
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