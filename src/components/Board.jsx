import React, { Component } from 'react'

export class Board extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            grids: Array.from(Array(this.props.gridNumber).keys())
        };
    }

    handleHover(props) {
        //change the background color
        return
    }

    render() {
        return (
            <div className='board'>
                {
                    this.state.grids.map(x => <Grid key='x' />) 
                }
            </div>
        )
    }

    static defaultProps = {
        gridNumber: 480
    };
}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isColored: false
        };
    }

    render() {
        return (
            <div className='grid' key={this}></div>
        )
    }

    f
}

export default Board
