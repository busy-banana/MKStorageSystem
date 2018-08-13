import React from 'react';
import { Toast } from 'antd-mobile';
import { hashHistory } from 'react-router';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        ['forward',
            'showToast',
            'forward',
            'onBack',
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    showToast(content) {
        Toast.info(content, 1.5);
    }

    //页面跳转-前进
    forward(path, params) {
        // if (params && typeof(params) == 'object') {
        //     path = Object.assign(path, params)
        // }
        hashHistory.push(path);
        // console.log(this.context)
        // this.context.router.push(path)
    }

    //页面跳转-后退
    onBack() {
        hashHistory.goBack();
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