import { HStack } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'

import Card from "../components/Card";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <HStack>
    <Card />
    <Card />
    <Card />
    </HStack>
    </>
  )
}