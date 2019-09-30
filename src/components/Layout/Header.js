import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div style={headerstyle}>
            <h1>To Do</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
    )
}

const headerstyle = {
    textAlign: 'center',
    background: '#3aab67',
    color: '#fff',
    padding: '10px',
}
