import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

export const FilmCard = ({ film }: any) => {
  console.log(film)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Center py={14} onClick={onOpen}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{film.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           {film.description}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        justifyContent={'center'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'300px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `${'https:' + film.file.url}`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={350}
            _hover={{
              transition: 'all .3s ease',
              height: 310,
              cursor: 'pointer',
              filter: 'grayscale(80%)',
            }}
            width={282}
            objectFit={'cover'}
            src={'https:' + film.file.url}
          />
        </Box>
        <Stack pt={5} align={'center'}>
          <Heading
            color={'gray.600'}
            fontSize={'xl'}
            fontFamily={'body'}
            fontWeight={500}
          >
            Más Info
          </Heading>
        </Stack>
      </Box>
    </Center>
  )
}
