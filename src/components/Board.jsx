import React, { Component } from 'react'
//props: mode, shouldBeClear, onClear, customedColor
export class Board extends Component {
    constructor(props) {
        super(props);
        this.renderGrids = this.renderGrids.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.state = {
            grids: this.initBoard(this.props.gridNumber),
        }
    }

    static defaultProps = { gridNumber: 475 };

    //input: int    return a 2D array as the board
    initBoard(gridNumber) {
        const grids = new Array(gridNumber);
        let keyValue = 0;
        for (let i=0; i<grids.length; i++) {
            grids[i] = {
                position: keyValue,
                isColored: false,
                gridColor: ''
            };
            keyValue++;
        }
        return grids;
    }

    //reset all grids
    handleClear() {
        let tempGrids = this.state.grids;
        for (let cell of tempGrids) {
            cell.isColored = false;
            cell.gridColor = '';
        }
        this.setState({grids: tempGrids});
        this.props.onClear();
    }

    //change the color of the hovered grid
    handleColorChange(position) {
        let tempGrids = this.state.grids;
        let hoveredColor;
        switch (this.props.mode) {
            case 'BW':
                hoveredColor = 'black';
                break;
            case 'rainbow':
                hoveredColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                break;
            case 'customColor':
                hoveredColor = this.props.customedColor;
                break;
            default:
                hoveredColor = 'black';
        }
        (tempGrids[position]).isColored = true;
        tempGrids[position].gridColor = hoveredColor;
        this.setState({
            grids: tempGrids
        });
    }

    //take grids(2D array), return the corresponding components
    renderGrids() {
        if (this.props.shouldBeClear) {
            this.handleClear();
        }

        const gridsPerRow = Math.floor(Math.sqrt(this.props.gridNumber*4/3));

        let rows = [];
        let cells = [];
        for (let i=0; i<this.state.grids.length; i++) {
            if (i%gridsPerRow === 0 && i!==0) {
                rows.push(<div className='board-row'>{cells}</div>);
                cells = [];
            }
            cells.push(<Grid position={this.state.grids[i].position} isColored={this.state.grids[i].isColored} onColorChange={this.handleColorChange} gridColor={this.state.grids[i].gridColor}/>)
        }
        return rows;
    }

    render() {
        return (
            <div className='board'>
                {this.renderGrids()}
            </div>
        )
    }
}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        if (!this.props.isColored)
            this.props.onColorChange(this.props.position);
    }

    render() {
        return (
            <div className='grid' onMouseOver={this.handleHover} 
                style={{
                    backgroundColor: this.props.gridColor
                }}
                ></div>
        )
    }
}

export default Board