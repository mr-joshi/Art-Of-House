import React from 'react'
import DrawerExample from './drawer'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
};
const theme = extendTheme({
  components
});

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
      <ChakraProvider theme={theme}>
    
        <DrawerExample />

   
    </div>
  )
}


export default Header