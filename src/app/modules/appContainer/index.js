import React from 'react';
import { Toast } from 'antd-mobile';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    showToast(content) {
        Toast.info(content, 1.5);
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