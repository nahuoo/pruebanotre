import {
  Button,
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>


      <Flex
        pl={'10%'}
        flex={1}
        align={'center'}
        justify={'flex-start'}
        backgroundImage="/bikini2.jpeg"
        backgroundSize="cover"
        backgroundPosition="center 50%"      
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            ></Text>
            <br /> <Text as={'span'}>Trajes de baño epicardos</Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
            Trajes de baño industria de tu viejaasdasdasdasdasdasdasdas
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'cyan.200'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Ver productos
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
}
