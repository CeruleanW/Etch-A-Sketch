import React, { Component } from 'react';
import {TwitterPicker} from 'react-color';

const buttonId = 'customColor';

class CustomColorButton extends Component {
    constructor(props) {
        super(props);
        this.sendColor = this.sendColor.bind(this);
        this.sendMode = this.sendMode.bind(this);
        this.state = {
            displayColorPicker: false,
        };
    }
    

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };


    sendMode(event) {
        this.props.onMode(buttonId);
    }

    sendColor(color, event) {
        this.props.onColor(color.hex);
    }

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }

        return (
            <div>
                <div>
                    <button onClick={ this.handleClick }></button>
                    { this.state.displayColorPicker ? <div style={ popover }>
                    <div style={ cover } onClick={ this.handleClose }/>
                    <TwitterPicker onChange={this.sendColor}/>
                    </div> : null }
                </div>
                <button id={buttonId} onClick={this.sendMode}>Custom Color Mode</button>
            </div>
        );
    }
}

export default CustomColorButton