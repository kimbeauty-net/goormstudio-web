import { Box, HStack, Link, Text } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Box p={4} borderBottomWidth={1} bgColor={'white'}>
      <HStack justifyContent={'space-between'}>
        <Text fontWeight={'bold'} fontSize={24}>
          goormstudio
        </Text>
        <HStack
          justifyContent={'space-around'}
          display={{ base: 'none', md: 'flex' }}
          w={80}
        >
          <Link href="/">
            <Text fontSize={20}>홈</Text>
          </Link>
          <Link href="/announce">
            <Text fontSize={20}>공고</Text>
          </Link>
          <Link href="/about">
            <Text fontSize={20}>소개</Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  )
}
