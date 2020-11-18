import React, { Component } from 'react'
import axios from 'axios';

export class Books extends Component {
    componentDidMount() {
        axios.get('/api/books')
            .then(res => {
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                <h1>books</h1>
            </div>
        )
    }
}

export default Books
