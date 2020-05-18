import React, { Component } from 'react';
import { useState } from 'react';
import Board from './Board';
import CustomColorButton from './CustomColorButton';

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
             customedColor: '#81D1FC',
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
        this.setState({gridNumber: n});
    }

    getColor(color) {
        this.setState({customedColor: color});
    }

    render() {

        return (
            <div className='main'>
                <div className='menu'>
                    <button id='clear' className='buttons' onClick={this.sendClearCommand}>Clear</button>
                    <button id='rainbow' className='buttons' onClick={this.handleMode.bind(this, 'rainbow')}>Rainbow Mode</button>
                    <button id='BW' className='buttons' onClick={this.handleMode.bind(this, 'BW')}>Black/White Mode</button>
                    <CustomColorButton onColor={this.getColor} onMode={this.handleMode} />
                    <CustomButton onSizeChange={this.handleCutomSize}/>
                </div>
                <Board mode={this.state.runningMode} shouldBeClear={this.state.sendClear} onClear={this.handleClear} gridNumber={this.state.gridNumber} customedColor={this.state.customedColor}/>
            </div>
        );
    }
}


//send: gridNumber      props: onSizeChange
function CustomButton(props) {
    const [width, setWidth] = useState(24);
    const [height, setHeight] = useState(18);

    const sendSize = () => {
        props.onSizeChange(width*height) ;
    };

    const setStateFromHeight = (e) => {
        setHeight(e.target.value);
        let w = Math.floor(e.target.value/3*4);
        setWidth(w);
    };
    const setStateFromWidth = (e) => {
        setWidth(e.target.value);
        let h = Math.floor(e.target.value/4*3);
        setHeight(h);
    };

    return (
        <div id='custom-container'>
            <input id='custom-width' type="text" minLength="4" maxLength="8" size="3" value={width} onChange={setStateFromWidth}></input>
            <span> * </span>
            <input id='custom-height' type="text" minLength="4" maxLength="8" size="3" value={height} onChange= {setStateFromHeight}></input>
            <button value='custom' className='buttons' onClick={sendSize}>Custom Size</button>
        </div>
    )    
}

export default Menu