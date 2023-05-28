import Head from 'next/head'
import {
  Box,
  Heading,
  Text,
  Stack,
  // useColorModeValue,
  Center,
  ScaleFade
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function CallToActionWithAnnotation () {
  const [scrollTop, setScrollTop] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }
    const handleResize = () => {
      setHeight(window.innerHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleShowNabvar = () => {
    if ((scrollTop > height * 0.10)) {
      return false
    }
    return true
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Box
        width={'100%'}
        height={'100vh'}
        bgImage={"url('/images/bg.png')"}
        bgPosition={'bottom right'}
        bgSize={'cover'}
        bgRepeat={'no-repeat'} >
        <Center>

          <ScaleFade initialScale={0.9} in={handleShowNabvar()}>

        <Stack
          as={Box}
          textAlign={'center'}
          maxWidth={'3xl'}
          marginTop={'100px'}
          mb={'110px'}
          bgColor={'#3b3755'}
          p={3}
          mx={{ base: '10px' }}
          rounded={'lg'}
        >

          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            color={'gray.100'}
            lineHeight={'110%'}>
            Hola, soy Jose Suarez<br />
            <Text as={'span'} color={'#ffa3fd'}>
              Programador Full stack
            </Text>
          </Heading>
          <Text color={'gray.200'} fontSize={'lg'}>
            Amante de la programacion y el diseño.
            Creo que la innovacion nace de las casualidades como el que estes en esta pagina
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
          </Stack>
        </Stack>
        </ScaleFade>
        </Center>
      </Box>
    </>
  )
}
