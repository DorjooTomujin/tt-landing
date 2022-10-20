import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box bg="black" pt={"125px"} px={"150px"} pos="relative">
      <HStack justifyContent={"space-between"} mb={"174px"}>
        <Heading fontWeight={"medium"} fontSize={"100px"} color="white">
          Get Started
        </Heading>
        <HStack maxW={"500px"} w="full" gap={"20px"}>
          <Input
            px={"35px"}
            py={"16px"}
            placeholder="Enter your email or something"
            borderRadius={77}
            bg={"d9d9d9"}
            maxW="292px"
            height={"auto"}
          />
          <Button
            bg={"main.neon"}
            fontWeight="medium"
            color={"white"}
            fontSize={25}
            borderRadius={77}
            py={"10px"}
            px={"22px"}
            height="auto"
          >
            Get in Touch
          </Button>
        </HStack>
      </HStack>
      <HStack w="full" gap={"60px"}>
        <VStack w="30%" alignItems={"start"}>
          <Heading color={"white"} fontWeight="medium" fontSize={40}>
            Quicklinks
          </Heading>
          <Box h={"60px"} />
          <Divider />
          <VStack alignItems={"start"} color={"white"} py={"48px"}>
            <Link fontSize={25}>Home</Link>
            <Link fontSize={25}>About Us</Link>
            <Link fontSize={25}>Products</Link>
            <Link fontSize={25}>Career</Link>
          </VStack>
          <Divider />
        </VStack>
        <VStack w="30%" alignItems={"start"}>
          <Heading color={"white"} fontWeight="medium" fontSize={40}>
          Socialmedias
          </Heading>
          <Box h={"60px"} />
          <Divider />
          <VStack alignItems={"start"} color={"white"} py={"48px"}>
            <Link fontSize={25}>Instagram</Link>
            <Link fontSize={25}>Facebook</Link>
            <Link fontSize={25}>Linkedin</Link>
            <Link fontSize={25}>Gmail</Link>
          </VStack>
          <Divider />
        </VStack>
      </HStack>
      <Box h={'40px'}/>
      <HStack w={'full'} justifyContent='end' py={'48px'}>
            <Text color={'white'}>&copy; 2022 Tomujin Digital LLC</Text>
        </HStack>
    </Box>
  );
};
