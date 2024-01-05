import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bgColor={'black'} mt={12}>
      <Box p={{ md: 12, base: 8 }}>
        <SimpleGrid columns={{ md: 3, base: 1 }} spacing={8}>
          <VStack align={'start'}>
            <Text color={'white'} fontWeight={'semibold'}>
              사업자 정보{' '}
            </Text>
            <Text color={'white'}>구름스튜디오(주)</Text>
            <Text color={'white'}>대표 이사: 김경환, 허진혁</Text>
            <Text color={'white'}>
              인천광역시 남동구 남동서로 236번길 30, 215-A41호
            </Text>
            <Text color={'white'}>사업자등록번호: </Text>
            <Text color={'white'}>통신판매업: </Text>
            <Text color={'white'}>직업정보제공사업: </Text>
          </VStack>

          <VStack align={'start'}>
            <Text color={'white'} fontWeight={'semibold'}>
              법적고지
            </Text>
            <Text color={'white'}>약관</Text>
          </VStack>

          <VStack align={'start'}>
            <Text color={'white'} fontWeight={'semibold'}>
              컨택트
            </Text>
            <Text color={'white'}>contact@goormstudio.com</Text>
            <Text color={'white'}>02-1111-1111</Text>
          </VStack>
        </SimpleGrid>

        <Box mt={16} />
        <Text color={'white'} m={8} align={'center'}>
          goormstudio Inc. All right recieved.
        </Text>
      </Box>
    </Box>
  )
}
