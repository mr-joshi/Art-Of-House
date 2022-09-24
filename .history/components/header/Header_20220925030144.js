import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  
  return (
    <div className='header_container'>
      <div className='header_main'>
        <div className='header_logo'>Logo</div>
        <div className='header_main_tags'>
          <div className='tag_home'>Home</div>
          <div className='tag_animations'>Animations</div>
          <div className='tag_shop'>Shop</div>
          <div className='tag_news'>News</div>
        </div>
        <div className='header_login_tags'>
          <div className='tag_login'>Join</div>
        </div>
      </div>
      <button onClick={Size}></button>
    </div>
  )
}


export default Header