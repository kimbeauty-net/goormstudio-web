import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box></Box>
      <Box w={'full'} p={8}>
        <VStack mt={12}>
          <HStack mt={12} mb={32}>
            <VStack>
              <Heading>구름스튜디오</Heading>
              <Text fontSize={'large'}>당신의 미용 커리어를 위해</Text>
              <Button bgColor={'black'} color={'white'} mt={12}>
                회사 소개
              </Button>
            </VStack>
            <Box>
              {/* <Image
                alt="banner"
                src={'/images/a.jpg'}
                width={100}
                height={100}
              /> */}
            </Box>
          </HStack>
          <Divider />
          <VStack w={'full'} mt={12} bgColor={'white'}>
            <Heading alignSelf={'start'}>서비스</Heading>
            <HStack justifyContent={'space-between'} h={500} w={'full'} p={24}>
              <Box borderRadius={12} bgColor={'black'} p={8} mr={40}>
                <Text color={'white'} fontWeight={'bold'} fontSize={32}>
                  김미용넷 (준비중)
                </Text>
                <Text color={'white'} fontSize={24} mt={8}>
                  {' '}
                  커뮤니티를 통해 질문하고
                </Text>
                <Text color={'white'} fontSize={24} mt={8}>
                  포트폴리오를 포함해 이력서를 등록하고
                </Text>
                <Text color={'white'} fontSize={24} mt={8}>
                  구직을 시작해보세요!
                </Text>
              </Box>
              <Image
                src={'/images/mokup.png'}
                alt="mokup"
                width={320}
                height={400}
              />
            </HStack>
          </VStack>
          <Divider mt={24} />
          <VStack w={'full'} mt={12} bgColor={'white'}>
            <Heading alignSelf={'start'}>회사 소식</Heading>
            <HStack justifyContent={'space-around'} mt={12}>
              <Box borderRadius={12} bgColor={'gray.100'} p={24}>
                <Text>아직 소식이 없습니다.</Text>
              </Box>
              <Box borderRadius={12} bgColor={'gray.100'} p={24}>
                <Text>아직 소식이 없습니다.</Text>
              </Box>
              <Box borderRadius={12} bgColor={'gray.100'} p={24}>
                <Text>아직 소식이 없습니다.</Text>
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <Footer />
    </Box>
  )
}
//<a href="https://www.freepik.com/free-psd/psd-3d-render-rocket-ioslated-background_51007258.htm#query=3d%20png&position=0&from_view=search&track=ais&uuid=61ea5807-5b2b-4cd8-bb4e-7f7ebc74c027">Image by vector_corp</a> on Freepik
