import React from 'react'

import './Header.css'

import CameraOutlinedIcon from '@material-ui/icons/CameraOutlined';

function Header() {
  return (
    <div className='header'>
      <CameraOutlinedIcon />
      <h1> Entertainment Hub</h1>
      <CameraOutlinedIcon />
    </div>
  )
}

export default Header;
