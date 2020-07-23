// render box and toggle
import React, {Component} from 'react';
import Box from './Box'
import Toggle from './Toggle'
import data from '../data'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            index: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        let num = this.state.index
        if (num === 24) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    decrement() {
        let num = this.state.index
        if (num === 0) {
            this.setState({
                index: 24
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    // decrement() {
    //     this.setState({
    //         index: this.state.index - 1
    //     })
    // }

    render() {
        return (
            <div>
                <Box data={this.state.data} index={this.state.index}/>
                <Toggle increment={this.increment} decrement={this.decrement}/>
            </div>
        )
    }
}

export default Main