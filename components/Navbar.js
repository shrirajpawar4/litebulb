import React from "react";
import NextLink from "next/link";

import 
{ Flex, 
  Box, 
  Button, 
  Icon, 
  Image, 
  AvatarGroup, 
  Avatar, 
  Text, 
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Link,
  Spacer
  } from "@chakra-ui/react"

import { FaRegLightbulb, FaSearch } from "react-icons/fa"
import Card from "./Card";

import Hero from "../public/hero.png"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <HStack bgColor="#f5f5f5">
        <Button 
            ml={6}
            mt={3}
            mb={3}
            leftIcon={<FaRegLightbulb />} 
            color="whiteAlpha.900" 
            bgColor="blackAlpha.900"
            size="md"
            height='48px'
            width='200px'
            >lightBulb</Button>

            <Spacer />
            
            <Flex minWidth='max-content' alignItems='center' gap='2' p={4}>
            <Link href="/community" color='#777777'>Community</Link>
            <Spacer />
            <Link href="/community" color='#777777'>Explore</Link>
            <Spacer />
            <Link href="/community" color='#777777'>Help</Link>
            <Spacer />
            
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <FaSearch color='black' />
                </InputLeftElement>
                <Input onClick={onOpen} w='auto' placeItems='self-end' placeholder="search startup ideas..." rounded='3xl' bgColor='gray.200' _placeholder={{ opacity: 1, color: 'gray.600' }} />
            </InputGroup>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent color='whitesmoke'>
                <Card />
            </ModalContent>
            </Modal>
        </HStack>
        <Divider />
        <Flex>
            <Image src={Hero} alt="Image" />
        </Flex>
        </>
    )
}

export default Navbar;