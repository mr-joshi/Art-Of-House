import React from 'react'

const Header = () => {
  return (
    <div className='header_container'>
      <header className='header_main'>
        <div className='header_logo'>Logo</div>
        <div className='header_main_tags'>
          <div className='tag_home'>Home</div>
          <div className='tag_home'>Animations</div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      </header>
    </div>
  )
}

export default Header