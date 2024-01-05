import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <Box></Box>
      <Box w={'full'} p={8}>
        <VStack mt={12}>
          <HStack mt={12} mb={32}>
            <VStack>
              <Heading>구름스튜디오</Heading>
              <Text fontSize={'large'}>당신의 미용 커리어를 위해</Text>
              <Link href={'/about'}>
                <Button bgColor={'black'} color={'white'} mt={12}>
                  회사 소개
                </Button>
              </Link>
            </VStack>
            <Box></Box>
          </HStack>
          <Divider />
          <VStack w={'full'} mt={12} bgColor={'white'}>
            <Heading alignSelf={'center'}>서비스</Heading>

            <HStack
              justifyContent={'space-around'}
              h={500}
              w={'full'}
              p={{ md: 24, base: 4 }}
            >
              <Box borderRadius={12} bgColor={'black'} p={8}>
                <Text
                  color={'white'}
                  fontWeight={'semibold'}
                  fontSize={{ md: 32, base: 28 }}
                >
                  김미용넷 (준비중)
                </Text>
                <Text color={'white'} fontSize={{ md: 24, base: 20 }} mt={8}>
                  {' '}
                  커뮤니티를 통해 질문하고
                </Text>
                <Text color={'white'} fontSize={{ md: 24, base: 20 }} mt={8}>
                  포트폴리오를 포함해 이력서를 등록하고
                </Text>
                <Text color={'white'} fontSize={{ md: 24, base: 20 }} mt={8}>
                  구직을 시작해보세요!
                </Text>
                <Link
                  href={'https://kimbeauty.net/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button borderRadius={'full'} mt={8} size={'lg'}>
                    바로가기
                  </Button>
                </Link>
              </Box>
              <Box display={{ md: 'flex', base: 'none' }}>
                <Image
                  src={'/images/mokup.png'}
                  alt="mokup"
                  width={320}
                  height={400}
                />
              </Box>
            </HStack>
          </VStack>
          <Divider mt={24} />
          <VStack w={'full'} mt={12} bgColor={'white'}>
            <Heading alignSelf={'center'}>회사 소식</Heading>
            <HStack justifyContent={'space-around'} mt={12}>
              <Box borderRadius={12} bgColor={'gray.100'} p={24}>
                <Text>아직 소식이 없습니다.</Text>
              </Box>
              <Box
                borderRadius={12}
                bgColor={'gray.100'}
                p={24}
                display={{ base: 'none', md: 'flex' }}
              >
                <Text>아직 소식이 없습니다.</Text>
              </Box>
              <Box
                borderRadius={12}
                bgColor={'gray.100'}
                p={24}
                display={{ base: 'none', md: 'flex' }}
              >
                <Text>아직 소식이 없습니다.</Text>
              </Box>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}
