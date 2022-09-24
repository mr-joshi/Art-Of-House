import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosureisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction='row' mb='4'>
          <Radio value='top'>Top</Radio>
          <Radio value='right'>Right</Radio>
          <Radio value='bottom'>Bottom</Radio>
          <Radio value='left'>Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
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
        {PlacementExample()}
      </div>
    </div>
  )
}

function SizeExample() {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Drawer`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Header