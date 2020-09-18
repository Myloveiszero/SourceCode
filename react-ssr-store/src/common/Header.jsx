import React, { Component } from 'react'
import axios from 'axios'

function reqAction() {
    return axios('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E9%A9%AC%E5%85%8B%E8%A5%BF%E5%A7%86')
}

class Header extends Component {
    
    constructor() {
        super()
        this.state = {
            songs: typeof window === 'object' ? window.songs : null
        }
    }
   
    componentDidMount() {
        // reqAction().then(res => {
        //     console.log(res)
        //     this.setState({
        //         songs: res.data
        //     })
        // }) 
    }
    render() { 
        const { songs } = this.state
        return (  
            <div>
                Hellow World
                {songs?.result?.songs.map((s, i) => {
                    return (
                        <div key={i}>
                        <li>{s.name}</li>
                        </div>                  
                    )
                })}
            </div>
        )
    }
}
 Header.loadData = reqAction

export default Header
