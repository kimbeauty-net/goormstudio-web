import {
  Box,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bgColor={'black'} mt={12}>
      <Box p={12}>
        <HStack justifyContent={'space-around'}>
          <Box w={'40%'}>
            <VStack align={'start'}>
              <Text color={'white'} fontWeight={'semibold'}>
                사업자 정보{' '}
              </Text>
              <Text color={'white'}>구름스튜디오(주) 예정</Text>
              <Text color={'white'}>
                인천광역시 남동구 남동서로 236번길 30, 215-A41호
              </Text>
              <Text color={'white'}>대표 이사: 김경환, 허진혁</Text>
              <Text color={'white'}>사업자등록번호: </Text>
              <Text color={'white'}>통신판매업: </Text>
            </VStack>
          </Box>
          <Box w={'40%'}>
            <VStack align={'start'}>
              <Text color={'white'} fontWeight={'semibold'}>
                법적고지
              </Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
            </VStack>
          </Box>
          <Box w={'40%'}>
            <VStack align={'start'}>
              <Text color={'white'} fontWeight={'semibold'}>
                법적고지
              </Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
              <Text color={'white'}>미리보기</Text>
            </VStack>
          </Box>
        </HStack>

        <Divider mt={8} />
        <Text color={'white'} m={8} align={'center'}>
          goormstudio Inc. All right recieved.
        </Text>
      </Box>
    </Box>
  )
}
