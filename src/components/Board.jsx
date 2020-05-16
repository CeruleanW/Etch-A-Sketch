import React, { Component } from 'react'
//props: mode, shouldBeClear,
export class Board extends Component {
    constructor(props) {
        super(props);
        this.renderGrids = this.renderGrids.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        const gridNumber = this.props.gridNumber;
        this.state = {
            mode: this.props.mode,
            grids: this.initBoard(this.props.gridNumber)
        }
    }

    static defaultProps = { gridNumber: 475 };

    //input: int    return a 2D array as the board
    initBoard(gridNumber) {
        let gridsPerRow = Math.floor(Math.sqrt(gridNumber*4/3));
        let gridsPerCol = Math.floor(gridNumber/gridsPerRow);
        let grids = new Array(gridsPerCol);

        for (let i=0; i<gridsPerCol; i++) {
            grids[i] = new Array(gridsPerRow);
            for (let j=0; j<gridsPerRow; j++) {
                let keyValue = [i, j];
                grids[i][j] = {
                    key: keyValue,
                    isColored: false,
                };
            }
        }
        return grids;
    }

    //reset all grids
    handleClear() {
        let tempGrids = this.state.grids;
        let rows = [];
        for (const row of tempGrids) {
            for (const cell of row) {
                cell.isColored = false;
            }
        }
        this.setState({grids: tempGrids});
        this.props.onClear();
    }

    //change the color of the hovered grid
    handleColorChange(position) {
        let tempGrids = this.state.grids;
        (tempGrids[position[0]][position[1]]).isColored = true;
        this.setState({
            grids: tempGrids
        });
    }

    //take grids(2D array), return the corresponding components
    renderGrids(grids) {
        if (this.props.shouldBeClear) {
            this.handleClear();
        }
        let rows = [];
        for (const row of grids) {
            let cells = [];
            for (const cell of row) {
                cells.push(<Grid position={cell.key} isColored={cell.isColored} onColorChange={this.handleColorChange} />)
            }
            rows.push(<div className='board-row'>{cells}</div>);  
        }
        return rows;
    }

    render() {
        return (
            <div className='board'>
                {this.renderGrids(this.state.grids)}
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
        this.props.onColorChange(this.props.position);
    }

    render() {
        const bgcolor = (this.props.isColored) ? 'black' : 'white';
        return (
            <div className='grid' onMouseOver={this.handleHover} 
                style={{
                    backgroundColor: bgcolor
                }}
                ></div>
        )
    }
}

export default Board
