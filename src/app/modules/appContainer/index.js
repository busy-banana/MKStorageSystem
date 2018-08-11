import React from 'react';

export default class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    goHome() {
        console.log(this.context)
        this.context.router.history.push('/home')
    }

    render() {
        return (
            <div onClick={this.goHome}>
                AppContainer~

            </div>
        )
    }
}