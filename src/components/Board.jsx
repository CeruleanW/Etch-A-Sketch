import React, { Component } from 'react'
//props: mode, shouldBeClear,
export class Board extends Component {
    constructor(props) {
        super(props);
        this.renderGrids = this.renderGrids.bind(this);
        this.state = {
            mode: this.props.mode,
            shouldBeClear: this.props.shouldBeClear
        }
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

    //return all the grids
    renderGrids(grids) {
        let rows = [];
        for (const row of grids) {
            let cells = [];
            for (const cell of row) {
                cells.push(<Grid key={cell.key} isColored={cell.isColored} onColorChange={this.handleColorChange}/>)
            }
            rows.push(<div className='board-row'>{cells}</div>);  
        }
        return rows;
    }

    render() {
        const grids = this.initBoard(this.props.gridNumber);
        return (
            <div className='board'>
                {this.renderGrids(grids)}
            </div>
        )
    }
}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.state = {
            isColored: false
        }
    }

    handleHover() {
        this.setState({isColored: true});
    }

    render() {
        const bgcolor = (this.state.isColored) ? 'black' : 'white';
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
