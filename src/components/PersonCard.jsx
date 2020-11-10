import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: this.props.age
        }
    }
    birthday = () => {
        this.setState({ update: this.state.update + 1 });
    }
    render() {
        return (
            <fieldset>
                <h3>{this.props.firstName}, {this.props.lastName}</h3>
                <p>Age: {this.state.update}</p>
                <p>Hair Color: {this.props.hair}</p>
                <button onClick={ this.birthday }>Birthday button</button>
            </fieldset>
        )
    }
}
// https://github.com/RASantos92/hooks.git
export default PersonCard;