import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  export const FilmCard = ({film}: any) => {

    return (
      <Center py={12} mx='20px'>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
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
              backgroundImage: `${'https:'+film.file.url}`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
                maxW:'400px'
              },
            }}>
            <Image
              rounded={'lg'}
              height={300}  
              width={282}
              objectFit={'cover'}
              src={'https:'+film.file.url}
              _hover={{
                transition: 'all .3s ease',
                height: 400,
                width: 400,
                cursor: 'pointer',
              }}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading color={'gray.600'} fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
              {film.title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }