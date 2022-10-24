import {
     Box,
     Button,
     Divider,
     Heading,
     HStack,
     Image,
     Input,
     Text,
     VStack,
} from "@chakra-ui/react";

import { FooterLink } from "../utils";

export const Footer = () => {
     return (
          <Box
               bg="black"
               pt={"125px"}
               px={["30px", "60px", "30px", "60px", "150px"]}
               pos="relative"
          >
               <Image
                    src="/assets/imgs/tt_logo.png"
                    h={["33px", "44px", "55px", "66px"]}
                    mx={["auto", "auto", 0]}
               />
               <Box h="75px" />
               <HStack
                    justifyContent={"space-between"}
                    mb={"75px"}
                    flexDir={["column", "column", "column", "column", "row"]}
               >
                    <Heading
                         fontWeight={"medium"}
                         fontSize={["50px", "55px", "80px", "100px"]}
                         color="white"
                         lineHeight={1}
                    >
                         Get Started
                    </Heading>
                    <Box h={["60px", "60px", "60px", "60px", 0]} />
                    <HStack
                         maxW={"500px"}
                         px={["30px", "60px", 0]}
                         w="full"
                         flexDir={["column", "column", "row"]}
                         gap={"20px"}
                    >
                         <Input
                              px={"35px"}
                              py={["8px", "12px", "16px"]}
                              placeholder="Enter your Email or something"
                              borderRadius={77}
                              bg={"d9d9d9"}
                              maxW={["auto", "auto", "292px"]}
                              height={"auto"}
                              w={["full", "full", "auto"]}
                              focusBorderColor="main.neon"
                         />
                         <Button
                              variant={"neonButton"}
                              fontWeight="medium"
                              // color={"white"}
                              fontSize={[15, 18, 25]}
                              py={["12px", "14px"]}
                              px={"22px"}
                              height="auto"
                              w={["full", "full", "auto"]}
                              _hover={{ bgColor: "white", color: "black" }}
                         >
                              Get in Touch
                         </Button>
                    </HStack>
               </HStack>
               <HStack
                    w="full"
                    color="white"
                    gap={["20px", "20px", "60px"]}
                    flexDir={["column", "column", "row"]}
               >
                    <VStack
                         w={["full", "full", "50%", "50%", "30%"]}
                         alignItems={"start"}
                    >
                         <Heading
                              fontWeight="medium"
                              fontSize={[20, 24, 28, 32, 35]}
                         >
                              Quicklinks
                         </Heading>
                         <Box h={["5px", "5px", "30px", "60px"]} />
                         <Divider />
                         <VStack
                              alignItems={"start"}
                              py={["20px", "20px", "30px", "48px"]}
                         >
                              {/* <FooterLink href="/">Home</FooterLink> */}
                              <FooterLink href={"/"} text="Home" />
                              <FooterLink href={"/"} text="About Us" />
                              <FooterLink href={"/"} text="Products" />
                              <FooterLink href={"/"} text="Career" />
                         </VStack>
                         <Divider display={["none", "none", "block"]} />
                    </VStack>
                    <VStack
                         w={["full", "full", "50%", "50%", "30%"]}
                         alignItems={"start"}
                    >
                         <Heading
                              fontWeight="medium"
                              fontSize={[20, 24, 28, 32, 35]}
                         >
                              Social Medias
                         </Heading>
                         <Box h={["5px", "5px", "30px", "60px"]} />
                         <Divider />
                         <VStack
                              alignItems={"start"}
                              py={["20px", "20px", "30px", "48px"]}
                         >
                              <FooterLink href={"/"} text="Instagram" />
                              <FooterLink href={"/"} text="Facebook" />
                              <FooterLink href={"/"} text="LinkedIn" />
                              <FooterLink href={"/"} text="Gmail" />
                         </VStack>
                         <Divider display={["none", "none", "block"]} />
                    </VStack>
               </HStack>
               <Box h={["20px", "20px", "40px"]} />
               <HStack w={"full"} justifyContent={["start", "end"]} py={"48px"}>
                    <Text color={"white"}>&copy; 2022 Tomujin Digital LLC</Text>
               </HStack>
          </Box>
     );
};
