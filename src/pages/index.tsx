import { Button } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Proyects from '../components/Proyects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default function Home () {
  return <div className={'hoa'}>
    <Navbar></Navbar>
    <Hero></Hero>
    <Resume></Resume>
    <Proyects></Proyects>
    <Contact></Contact>
    <Footer></Footer>
    </div>
}
