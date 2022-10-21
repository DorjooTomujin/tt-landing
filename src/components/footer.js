import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box bg="black" pt={"125px"} px={['30px', '60px', '30px', '60px', "150px"]} pos="relative">
      <Image src='/assets/imgs/tt_logo.png' h={['33px','44px','55px', '66px']} mx={['auto','auto', 0]}/>
      <Box h='75px'/>
      <HStack justifyContent={"space-between"} mb={"75px"} flexDir={['column', 'column','column', 'column', 'row']}>
        <Heading fontWeight={"medium"} fontSize={["50px",'55px', '80px',"100px"]} color="white" lineHeight={1}>
          Get Started
        </Heading>
        <Box h={['60px', '60px', '60px', '60px', 0]}/>
        <HStack maxW={"500px"} px={['30px','60px', 0]} w="full" flexDir={['column','column', 'row']} gap={"20px"}>
          <Input
            px={"35px"}
            py={['8px','12px', "16px"]}
            placeholder="Enter your email or something"
            borderRadius={77}
            bg={"d9d9d9"}
            maxW={['auto', 'auto', "292px"]}
            height={"auto"}
            w={['full','full', 'auto']}
          />
          <Button
            bg={"main.neon"}
            fontWeight="medium"
            color={"white"}
            fontSize={[15, 18, 25]}
            borderRadius={77}
            py={['12px', "14px"]}
            px={"22px"}
            height="auto"
            w={['full','full', 'auto']}
          >
            Get in Touch
          </Button>
        </HStack>
      </HStack>
      <HStack w="full" gap={['20px', '20px', "60px"]} flexDir={['column', 'column', 'row']}>
        <VStack w={['full','full','50%', '50%', '30%']} alignItems={"start"}>
          <Heading color={"white"} fontWeight="medium" fontSize={[20, 24, 28, 32, 35]}>
            Quicklinks
          </Heading>
          <Box h={['5px','5px', '30px', "60px"]} />
          <Divider />
          <VStack alignItems={"start"} color={"white"} py={['20px','20px', '30px', "48px"]}>
            <Link fontSize={[15,18, 20, 25]}>Home</Link>
            <Link fontSize={[15,18, 20, 25]}>About Us</Link>
            <Link fontSize={[15,18, 20, 25]}>Products</Link>
            <Link fontSize={[15,18, 20, 25]}>Career</Link>
          </VStack>
          <Divider display={['none','none', 'block']}/>
        </VStack>
        <VStack w={['full','full','50%','50%', "30%"]} alignItems={"start"}>
          <Heading color={"white"} fontWeight="medium" fontSize={[20, 24, 28, 32, 35]}>
          Socialmedias
          </Heading>
          <Box h={['5px','5px','30px', "60px"]} />
          <Divider />
          <VStack alignItems={"start"} color={"white"} py={['20px','20px','30px', "48px"]}>
            <Link fontSize={[15,18, 20, 25]}>Instagram</Link>
            <Link fontSize={[15,18, 20, 25]}>Facebook</Link>
            <Link fontSize={[15,18, 20, 25]}>Linkedin</Link>
            <Link fontSize={[15,18, 20, 25]}>Gmail</Link>
          </VStack>
          <Divider display={['none', 'none', 'block']}/>
        </VStack>
      </HStack>
      <Box h={['20px','20px', '40px']}/>
      <HStack w={'full'} justifyContent={['start', 'end']} py={'48px'}>
            <Text color={'white'}>&copy; 2022 Tomujin Digital LLC</Text>
        </HStack>
    </Box>
  );
};
