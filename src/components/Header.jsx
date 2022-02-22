import React from 'react'

function Header(props) {
    const styles = {
        backgroundColor: props.bgColor,
        color: props.textColor
    }

  return (
      <header style={styles}>
          <div className="container">
              <h2>{props.title}</h2>
          </div>
      </header>
  )
}

Header.defaultProps  = {
    title: 'Feedback UI',
    bgColor: 'rgba(0, 0, 0, .4)',
    textColor: '#ff6a95'
}

export default Header