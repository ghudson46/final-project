import React, { Component } from 'react'
import axios from 'axios';

export class Room extends Component {
    componentDidMount() {
        axios.get('/api/rooms')
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                <h1>room</h1>
            </div>
        )
    }
}

export default Room