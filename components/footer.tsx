import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export const Footer = () => {
    return (
      <Box
        bg="whiteAlpha.900"
        color={useColorModeValue('gray.700', 'gray.200')}>
      
        <Box py={10}>
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
            }}>
            0749 Producciones
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2021 Nahuel Sigismondi. Todos los derechos reservados
          </Text>
        </Box>
      </Box>
    );
  }