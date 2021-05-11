import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimatedButton extends Component {
    constructor(props){
        super(props);
        this.state={clicked:false}
    }
    render() {
        return (
            <div className="AnimatedButton" style={this.props.style}>
                {props.title}
            </div>
        );
    }
}

AnimatedButton.propTypes = {
    title:PropTypes.string.isRequired,
    style:PropTypes.object,
    action:PropTypes.func.isRequired,
};

export default AnimatedButton;