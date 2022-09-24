import React from 'react'
const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_main'>
        <div className='header_logo'>Logo</div>
        <div className='header_main_tags'>
          <div className='tag_home'>Home</div>
          <div className='tag_animations'>Animations</div>
          <div className='tag_login'>Shop</div>
          <div className='tag_signup'>News</div>
        </div>
        <div>
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </div>
  )
}

export default Header