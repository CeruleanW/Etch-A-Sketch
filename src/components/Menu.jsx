import React, { Component } from 'react'
import Board from './Board'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleMode = this.handleMode.bind(this);
        this.sendClearCommand = this.sendClearCommand.bind(this);
        this.state = {
             sendClear: false,
             runningMode: 'BW'
        };
    }

    handleMode(props) {
        this.setState({runningMode: props});
    }

    sendClearCommand() {
        this.setState({sendClear: true});
    }

    render() {
        return (
            <div className='main'>
                <div className='menu'>
                    <button value='clear' className='buttons' onClick={this.sendClearCommand}>Clear</button>
                    <RainbowButton onModeChange={this.handleMode}/>
                    <BWButton onModeChange={this.handleMode}/>
                    <CustomButton onModeChange={this.handleMode}/>
                </div>
                <Board mode={this.state.runningMode} shouldBeClear={this.state.sendClear}/>
            </div>
        );
    }
}

// Special types of button
function ClearButton(props) {
    // const clearBoard = () => {
    //     props.onClearCommand();
    // }
    
    return (
        <BaseButton value='clear' onClick={this.props.onClearCommand}/>
    )
}

function RainbowButton(props) {
    const setRainbowMode = () => {

    }
    
    return (
        <BaseButton value='rainbow' onClick={setRainbowMode}/>
    )
}

function BWButton(props) {
    const setBWMode = () => {

    }
    
    return (
        <BaseButton value='black-white' onClick={setBWMode} />
    )
}

function CustomButton(props) {
    const setCustomedColor = (color) => {

    }
    
    return (
        <div id='custom-container'>
            <input type="text" minLength="4" maxLength="8" size="3"></input>
            <span> * </span>
            <input type="text" minLength="4" maxLength="8" size="3"></input>
            <BaseButton value='custom' onClick={setCustomedColor}/>
        </div>
    )    
}

//Base model of buttons
function BaseButton(props) {
    return (
        <button value={props.value} className='buttons'>{props.value}</button>
    )
}

export default Menu