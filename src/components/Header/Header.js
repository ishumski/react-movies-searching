import React from 'react'

import './Header.css'

import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';

function Header() {
  return (
    <div className='header' onClick={() => window.scroll(0, 0)} >
      <CameraOutlinedIcon />
      <h1> Entertainment Hub</h1>
      <CameraOutlinedIcon />
    </div>
  )
}

export default Header;
