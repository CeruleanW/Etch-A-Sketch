import React from 'react';
import { useState } from 'react';
//send: gridNumber      props: onSizeChange
export function CustomSizeButton(props) {
    const [width, setWidth] = useState(32);
    const [height, setHeight] = useState(24);
    const sendSize = () => {
        props.onSizeChange(width * height);
    };
    const setStateFromHeight = (e) => {
        setHeight(parseInt(e.target.value));
        let w = Math.floor((e.target.value / 3) * 4);
        setWidth(parseInt(w));
    };
    const setStateFromWidth = (e) => {
        setWidth(parseInt(e.target.value));
        let h = Math.floor((e.target.value / 4) * 3);
        setHeight(parseInt(h));
    };
    return (<div id='custom-container'>
        <input id='custom-width' type="text" minLength="4" maxLength="8" size="1" value={width} onChange={setStateFromWidth}></input>
        <span> * </span>
        <input id='custom-height' type="text" minLength="4" maxLength="8" size="1" value={height} onChange={setStateFromHeight}></input>
        <button value='custom' className='buttons' onClick={sendSize}>Custom Size</button>
    </div>);
}
