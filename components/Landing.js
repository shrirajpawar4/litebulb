import {
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

import { FaTwitter, FaRegLightbulb } from "react-icons/fa"

export default function Landing() {
  return (
    <div>
    <Flex position={"fixed"} top={"0"} width={"100%"} background={"#EEEEEE"}  justifyItems={"center"} alignItems={"center"} flexDir={"row"} paddingTop={{base:"12px",md:"28px"}} paddingBottom={{base:"12px",md:"28px"}}>
        <Flex paddingLeft={{base:"20px",md:"140px"}} paddingRight={{base:"20px",md:"151px"}} justifyItems={"center"} alignItems={"center"} justifyContent={"space-between"} width={"100%"}>
        <Text color={"#B1AFFF"} fontSize={{base:"24px",md:"32px"}} fontFamily={"Poppins, sans-serif"} fontWeight={"700"} lineHeight={"38px"}>Grapevine</Text>
        <Button 
        color="#B1AFFF" 
        bgColor="blackAlpha.900" 
        _hover={{color:"blackAlpha.900", bgColor: "#B1AFFF"}}
        fontSize={{base:"13px",md:"16px"}} fontFamily={"Poppins, sans-serif"} fontWeight={"700"}>Connect with Twitter</Button>
        </Flex>
    </Flex>
    </div>
  );
}