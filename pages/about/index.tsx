import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <Box>
      <VStack>
        <Heading mt={12}> 기업 소개</Heading>
        <SimpleGrid mt={8}>
          <Box borderRadius={12} bgColor={'gray.100'} p={16}>
            <Text fontSize={24}>구름스튜디오(주)는</Text>
            <Text fontSize={24}>2024년 설립되어 커뮤니티를 기반으로</Text>
            <Text fontSize={24}>
              미용업계의 편의 서비스를 제공하고자 합니다.
            </Text>
          </Box>
          <Box borderRadius={12} p={20}>
            <Text fontSize={28}>회사 연혁</Text>
            <Text fontSize={20}>2024 법인 설립</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}
