import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
  return (
    <Box
      p={{ md: 4, base: 2 }}
      px={{ base: 4 }}
      borderBottomWidth={1}
      bgColor={'white'}
      position={'fixed'}
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
    >
      <HStack justifyContent={'space-between'}>
        <Link href="/">
          <Text fontWeight={'bold'} fontSize={24}>
            goormstudio
          </Text>
        </Link>
        <HStack
          justifyContent={'space-around'}
          display={{ base: 'none', md: 'flex' }}
          w={80}
        >
          <Link href="/">
            <Text fontSize={20}>홈</Text>
          </Link>
          <Link href="/announce">
            <Text fontSize={20}>공지</Text>
          </Link>
          <Link href="/about">
            <Text fontSize={20}>소개</Text>
          </Link>
        </HStack>
        <MobileNav />
      </HStack>
    </Box>
  )
}

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box display={{ md: 'none', base: 'flex' }}>
      <IconButton
        aria-label="사이드 바 열기"
        icon={<HamburgerIcon w={6} h={6} />}
        ref={btnRef}
        onClick={onOpen}
        size={'lg'}
        variant={'ghost'}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={30}>goormstudio</DrawerHeader>

          <DrawerBody mt={8}>
            <VStack align={'start'} spacing={4}>
              <Link href="/">
                <Text fontSize={24}>홈</Text>
              </Link>
              <Link href="/announce">
                <Text fontSize={24}>공지</Text>
              </Link>
              <Link href="/about">
                <Text fontSize={24}>소개</Text>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
