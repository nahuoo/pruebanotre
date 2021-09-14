import {
  Flex,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FilmCard } from './filmCard'
import { Hero2 } from './prueba2'

export const About = ({ films }: any) => {

  const categories = [
      {nombre:'Abrigos', foto:'/bikini.jpeg'},
      {nombre: 'Beach Wear', foto:'/bikini1.jpeg'},
      {nombre:'blusas', foto:''}
  ]
  return (
    <>
      <Flex id='about' w={'full'} bg="white" h={'80vh'} alignItems="center" justifyContent="center">
        <Box py={15} w={'50vw'}>
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
      <Hero2 />
      <Flex direction={{base:'column', md:'row'}} id='projects' bg="white" px='20px' mt='60px' justifyContent='center'>
        {categories.map((categoria: any) => (
          <FilmCard key={categoria.nombre} category={categoria} />
          ))}
          </Flex>
        
    
    </>
  )
}
