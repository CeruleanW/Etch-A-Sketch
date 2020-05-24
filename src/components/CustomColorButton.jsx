import React, { Component } from 'react';
import { InsideColorPicker } from './InsideColorPicker';

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
            <div className='custom-color-container'>
                <InsideColorPicker onChange={this.sendColor} />
                <button onClick={this.sendMode}>Custom Color Mode</button>
            </div>
        );
    }
}

export default CustomColorButton