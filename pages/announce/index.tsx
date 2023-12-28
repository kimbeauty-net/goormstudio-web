import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function Accnounce() {
  return (
    <Box>
      <NavBar />
      <VStack mt={12}>
        <Heading> 구름스튜디오(주) 공고</Heading>
        <Box
          borderRadius={12}
          bgColor={'gray.100'}
          p={24}
          mt={12}
          w={800}
          h={1200}
        >
          <Text fontWeight={'semibold'} fontSize={24} alignSelf={'center'}>
            아직 소식이 없습니다.
          </Text>
        </Box>
      </VStack>
      <Footer />
    </Box>
  )
}
