import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.ctfassets.net/ftv5t2jre3bg/3bdByODlc3nJSdG0EDjiLb/2e51d223709f00b8e2a92de76b25a2dd/_SEA6581S.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-t,transparent, whiteAlpha.200)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Contenidos audiovisuales con fuerte impronta autoral y de proyección
            internacional.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Contactános
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
