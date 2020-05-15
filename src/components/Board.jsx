import React, { Component } from 'react'

export class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grids: this.initBoard(this.props.gridNumber)
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.renderGrids = this.renderGrids.bind(this);
    }

    static defaultProps = { gridNumber: 475 };

    //return a 2D array as the board
    initBoard(gridNumber) {
        let gridsPerRow = Math.floor(Math.sqrt(gridNumber*4/3));
        let gridsPerCol = Math.floor(gridNumber/gridsPerRow);
        let grids = new Array(gridsPerCol);

        for (let i=0; i<gridsPerCol; i++) {
            grids[i] = new Array(gridsPerRow);
            for (let j=0; j<gridsPerRow; j++) {
                grids[i][j] = {
                    key: [i, j],
                    isColored: false,
                };
            }
        }
        return grids;
    }

    handleColorChange(e) {
        //change the state
        //change the background color
        return
    }

    //return all the grids
    renderGrids() {
        let rows = [];
        for (const row of this.state.grids) {
            let cells = [];
            for (const cell of row) {
                cells.push(<Grid key={cell.key} isColored={cell.isColored} onColorChange={this.handleColorChange}/>)
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
        const key = this.props.key;
    }

    handleHover(e) {
        this.props.onColorChange(e);
    }

    render() {
        const bgcolor = (this.props.isColored) ? 'black' : 'white';
        return (
            <div className='grid' onMouseOver={this.handleHover} backgroundColor={bgcolor} ></div>
        )
    }
}

export default Board
