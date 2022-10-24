import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
export const Navbar = ({ isOpen, onOpen, onClose, ref }) => {
  
  
  return (
    <>
      <Box display={['none', 'none', 'none', 'flex']}>
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
          <Box><Image src="/assets/imgs/tt_logo.png" h={[33]} /></Box>
          <HStack gap={[6]} color="white" fontSize={[25]}>
            <Link href="/" _hover={{ textDecor: "none" }}>
              Home
            </Link>
            <Link href="/" _hover={{ textDecor: "none" }}>
              About Us
            </Link>
            <Link href="/" _hover={{ textDecor: "none" }}>
              Products
            </Link>
            <Link href="/" _hover={{ textDecor: "none" }}>
              Career
            </Link>
          </HStack>

          <Button
            bg={"main.neon"}
            color="black"
            _hover={{ bg: "white", transition: "0.3s" }}
            transition="0.3s"
            fontWeight={"normal"}
            px={[5]}
            fontSize={[25]}
            borderRadius={77}
            py={[3]}
          >
            Contact Us
          </Button>
        </HStack>
      </Box>
      <Box display={['flex', 'flex', 'flex', 'none']} >
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
        <Box><Image src="/assets/svgs/hamburger.svg" /></Box>
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
              <Link href="/" _hover={{ textDecor: "none" }}>
                Home
              </Link>
              <Link href="/" _hover={{ textDecor: "none" }}>
                About Us
              </Link>
              <Link href="/" _hover={{ textDecor: "none" }}>
                Products
              </Link>
              <Link href="/" _hover={{ textDecor: "none" }}>
                Career
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};
