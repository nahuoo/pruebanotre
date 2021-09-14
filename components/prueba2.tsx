import {
    Stack,
    Flex,
    Box,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react'
  
  export const Hero2 = () => {
    return (
      <>
        <Flex
          w={'full'}
          h={'70vh'}
          backgroundImage={
            './kiara2.jpeg'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center 37%'}
        >
          <VStack
            w={'full'}
            justify={'flex-start'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            
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
               
              </Text>
            </Stack>
          </VStack>
        </Flex>
      </>
    )
  }
  