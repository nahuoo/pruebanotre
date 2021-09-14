import {
  Stack,
  Flex,
  Box,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export const Hero = () => {
  return (
    <>
      <Box h={'100vh'} bg="transparent"></Box>
      <Flex
        w={'full'}
        h={'150vh'}
       
      >
        <VStack
          w={'full'}
          justify={'flex-start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-t, white, transparent)'}
        >
          <Stack
            maxW={'full'}
            align={'flex-start'}
            bg={'grayOpacity.800'}
            spacing={6}
          >
            <Text
              color={'white'}
              px={{base:'0',md:'80'}}
              py={5}
              fontWeight={{base:'100',md:'400'}}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: 'xl' })}
            >
              Somos un equipo jóven, nacido y criado junto al mar.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </>
  )
}
