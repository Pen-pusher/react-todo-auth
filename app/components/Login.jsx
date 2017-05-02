import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
    onLogin: function () {
        var {dispatch} = this.props;

        dispatch(actions.startLogin());
    },
    render: function () {
        return (
            <div>
                <h1 className="">Todo App</h1>
                <div className="ui stackable grid centered">
                    <div className="eight wide computer twelve wide tablet tablet sixteen wide mobile column">
                        <div className="login">
                            <h3 className="main-header">Login</h3>
                            <p>Login with GitHub account below.</p>
                            <button className="ui primary button" onClick={this.onLogin}>Login With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Redux.connect()(Login);