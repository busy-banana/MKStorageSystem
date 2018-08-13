import React from 'react';
import { Toast } from 'antd-mobile';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    showToast(content) {
        Toast.info(content, 1.5);
    }

    //页面跳转-前进
    forward(path) {
        this.props.router.push(path);
    }

    //页面跳转-后退
    back(path) {

    }

    render() {
        const style = {width: '100%',height: '100%'};
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}