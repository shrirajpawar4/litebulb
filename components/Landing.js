import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

import { FaTwitter, FaRegLightbulb } from "react-icons/fa"

export default function Landing() {
  return (
    <Stack bgColor="#f5f5f5" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading color="#9069FF" fontSize={'2xl'}>Welcome to lightBulb 💡 </Heading>
          <Stack>
            <Button rightIcon={<FaTwitter />} colorScheme="twitter" w="auto" variant="solid">
              Sign in with Twitter
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          fit="fill"
          
        />
      </Flex>
    </Stack>
  );
}