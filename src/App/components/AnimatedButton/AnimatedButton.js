import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AnimatedButton.css'
class AnimatedButton extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }
    render() {
        return (
            <>
                <div className={"AnimatedButton"+(this.state.clicked? " clicked":"")} style={this.props.style} onClick={(evt) => {
                    this.props.action();
                    this.setState({ clicked: true });
                    setTimeout(() => { this.setState({ clicked: false }) }, 200)
                }}>
                    {this.props.title}
                </div>
{/* {JSON.stringify(this.state)} */}
            </>
        );
    }
}

AnimatedButton.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    action: PropTypes.func.isRequired,
};

export default AnimatedButton;