import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    const styles = {
        backgroundColor: props.bgColor,
        color: props.textColor,
    }

    return (
        <header style={styles}>
            <div className="container">
                <Link
                    to="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <h2>{props.title}</h2>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, .4)',
    textColor: '#ff6a95',
}

export default Header
