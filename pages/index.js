import { HStack } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'

import Card from "../components/Card";
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <>
    {/* <Landing /> */}

    <Navbar />
    <HStack>
    <Card />
    <Card />
    <Card />
    </HStack>
    </>
  )
}