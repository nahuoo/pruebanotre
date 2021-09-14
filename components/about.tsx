import {
  Stack,
  Flex,
  Box,
  Button,
  Text,
  VStack,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FilmCard } from './filmCard'

export const About = ({ films }: any) => {
  return (
    <>
      <Flex w={'full'} bg="white" h={'80vh'} alignItems="center" justifyContent="center">
        <Box py={10} w={'50vw'}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}
          >
            Nosotros
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            Producimos contenidos audiovisuales con fuerte impronta autoral y de
            proyección internacional. Buscamos fortalecer una industria cultural
            más federal e inclusiva.
          </Text>
        </Box>
      </Flex>
      <Flex bg="white" px='20px' justifyContent='center'>
        {films.map((film: any) => (
          <FilmCard key={film.fields.title} film={film.fields} />
        ))}
      </Flex>
    </>
  )
}
