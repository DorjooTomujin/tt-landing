import {
     Box,
     Button,
     Drawer,
     DrawerBody,
     DrawerCloseButton,
     DrawerContent,
     DrawerOverlay,
     HStack,
     Image,
     Link,
     VStack,
} from "@chakra-ui/react";

import { FooterLink } from "../utils";

export const Navbar = ({ isOpen, onOpen, onClose, ref }) => {
     return (
          <>
               <Box display={["none", "none", "none", "flex"]}>
                    <HStack
                         justifyContent={"space-between"}
                         alignItems="center"
                         w="full"
                         px={[8]}
                         py={[8]}
                         pos="absolute"
                         top={0}
                         zIndex={100}
                    >
                         <Box>
                              <Image src="/assets/imgs/tt_logo.png" h={[33]} />
                         </Box>
                         <HStack gap={[6]} color="white" fontSize={[25]}>
                              <FooterLink href={"/"} text="Home" />
                              <FooterLink href={"/"} text="About Us" />
                              <FooterLink href={"/"} text="Products" />
                              <FooterLink href={"/"} text="Career" />
                         </HStack>

                         <Button
                              variant={"neonButton"}
                              fontSize={[22]}
                              py={[6]}
                              fontWeight="normal"
                         >
                              Contact Us
                         </Button>
                    </HStack>
               </Box>
               <Box display={["flex", "flex", "flex", "none"]}>
                    <NavbarMobile
                         isOpen={isOpen}
                         onClose={onClose}
                         onOpen={onOpen}
                         ref={ref}
                    />
               </Box>
          </>
     );
};

export const NavbarMobile = ({ isOpen, onOpen, onClose }) => {
     return (
          <HStack
               justifyContent={"space-between"}
               alignItems="center"
               w="full"
               px={[8]}
               py={[8]}
               pos="absolute"
               top={0}
               zIndex={100}
          >
               <Image src="/assets/imgs/tt_logo.png" h={[33]} />

               <Button variant={"unstyled"} onClick={onOpen}>
                    <Box>
                         <Image src="/assets/svgs/hamburger.svg" />
                    </Box>
               </Button>
               <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent bg={"black"}>
                         <DrawerCloseButton color={"white"} fontSize={20} />

                         <DrawerBody>
                              <VStack
                                   gap={[6]}
                                   alignItems="center"
                                   justifyContent={"center"}
                                   h="full"
                                   color="white"
                                   fontSize={[25]}
                              >
                                   <Link
                                        href="/"
                                        _hover={{ textDecor: "none" }}
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/"
                                        _hover={{ textDecor: "none" }}
                                   >
                                        About Us
                                   </Link>
                                   <Link
                                        href="/"
                                        _hover={{ textDecor: "none" }}
                                   >
                                        Products
                                   </Link>
                                   <Link
                                        href="/"
                                        _hover={{ textDecor: "none" }}
                                   >
                                        Career
                                   </Link>
                              </VStack>
                         </DrawerBody>
                    </DrawerContent>
               </Drawer>
          </HStack>
     );
};
