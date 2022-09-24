import React from 'react'
import './hea.scss';
const Header = () => {
  return (
    <div className='header_container'>
      <header className='header_main'>
        <div className='header_logo'>Logo</div>
        <div className='header_main_tags'>
          <div className='tag_home'>Home</div>
          <div className='tag_animations'>Animations</div>
          <div className='tag_login'>Login</div>
          <div className='tag_signup'>Signup</div>
        </div>
      </header>
    </div>
  )
}

export default Header