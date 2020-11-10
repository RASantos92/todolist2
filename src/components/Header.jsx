import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                {this.props.someText};
            </div>
        )
    }
}

export default Header;