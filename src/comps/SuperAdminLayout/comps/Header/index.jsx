import React from 'react'
import './index.css'

const Header = ({name="Name of App", logo}) => {
  return (
    <div className="cmp-name">{logo}{name}</div>
  )
}

export default Header