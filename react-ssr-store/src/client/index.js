import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../common/Header'

ReactDOM.hydrate(<Header />,
    document.getElementById('root')
    )