import { ReactNode } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = ['Nosotros', 'Proyectos', 'Contacto']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    color={'white'}
    transition={'all .3s ease'}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.300', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <Box mt={{md:'22px'}} pos='fixed' w='100%' bg={useColorModeValue('transparent', 'gray.900')} px={4}>
      
          <Flex
            h={16}
            alignItems={'center'}
            pr={20}
            pl={20}
            justifyContent={{ base: 'space-between', md: 'space-between' }}
          >
                <Box fontSize={20}
          >0749 Producciones
              </Box>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack fontSize="18px" spacing={8} alignItems={'center'}>             
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
    </>
  )
}
