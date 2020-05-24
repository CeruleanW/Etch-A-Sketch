import React, { Component } from 'react';
import Board from './Board';
import CustomColorButton from './CustomColorButton';
import { CustomSizeButton } from './CustomSizeButton';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleMode = this.handleMode.bind(this);
        this.sendClearCommand = this.sendClearCommand.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCutomSize = this.handleCutomSize.bind(this);
        this.getColor = this.getColor.bind(this);
        this.state = {
             sendClear: false,
             runningMode: 'BW',
             customizedColor: '#81D1FC',
             gridNumber: 768,
        };
    }

    handleMode(id) {
        if (this.state.runningMode !== id) {
            this.sendClearCommand();
            this.setState({runningMode: id});
        }
    }

    sendClearCommand() {
        this.setState({sendClear: true});
    }

    handleClear() {
        this.setState({sendClear: false});
    }

    handleCutomSize(n) {
        this.sendClearCommand();
        this.setState({gridNumber: n});
    }

    getColor(color) {
        this.setState({customizedColor: color});
    }

    render() {
        return (
            <div className='main'>
                <div className='menu'>
                    <button id='clear' className='buttons' onClick={this.sendClearCommand}>Clear</button>
                    <button id='rainbow' className='buttons' onClick={this.handleMode.bind(this, 'rainbow')}>Rainbow Mode</button>
                    <button id='BW' className='buttons' onClick={this.handleMode.bind(this, 'BW')}>Black/White Mode</button>
                    <CustomColorButton onColor={this.getColor} onMode={this.handleMode} />
                    <CustomSizeButton onSizeChange={this.handleCutomSize}/>
                </div>
                <Board mode={this.state.runningMode} shouldBeClear={this.state.sendClear} onClear={this.handleClear} gridNumber={this.state.gridNumber} customizedColor={this.state.customizedColor}/>
            </div>
        );
    }
}


export default Menu