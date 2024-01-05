import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function Accnounce() {
  return (
    <Box>
      <VStack mt={12}>
        <Heading> 공지</Heading>
        <Box
          borderRadius={12}
          bgColor={'gray.100'}
          p={24}
          mt={12}
          w={{ md: 800, base: 'auto' }}
          h={1200}
        >
          <Text fontWeight={'semibold'} fontSize={24} alignSelf={'center'}>
            아직 소식이 없습니다.
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
