import React from 'react'

function Menu(props) {
    return (
        <div className='menu'>
            <ClearButton />
            <RainbowButton />
            <BWButton />
            <CustomButton />
        </div>
    )
}

function BaseButton(props) {
    return (
        <button value={props.value} className='buttons'>{props.value}</button>
    )
}

function ClearButton(props) {
    const clearBoard = () => {

    }
    
    return (
        <BaseButton value='clear' onClick={clearBoard}/>
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
    const setColor = (color) => {

    }
    
    return (
        <div>
            <input type="text" minlength="4" maxlength="8" size="3"></input>
            <span> * </span>
            <input type="text" minlength="4" maxlength="8" size="3"></input>
            <BaseButton value='custom' onClick={setColor}/>
        </div>
    )    
}

export default Menu

