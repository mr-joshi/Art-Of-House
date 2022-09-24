import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
        Create user
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel' htmlFor='username'>Name</FormLabel>
                <Input
                  ref={firstField}
                  id='username'
                  placeholder='Please enter user name'
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    placeholder='Please enter domain'
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                <Select id='owner' defaultValue='segun'>
                  <option value='segun'>Segun Adebayo</option>
                  <option value='kola'>Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Description</FormLabel>
                <Textarea id='desc' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        {DrawerExample()}
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