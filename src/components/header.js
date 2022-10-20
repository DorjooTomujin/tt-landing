import { Button, HStack, Image, Link } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <HStack justifyContent={'space-between'} alignItems='center' w='full' px={[8]} py={[8]} pos='fixed' top={0} zIndex={100}>
            <Image src="/assets/imgs/tt_logo.png" h={[33]}/>
            <HStack gap={[6]} color='white' fontSize={[25]}>
                <Link href="/" _hover={{textDecor:'none'}}>Home</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>About Us</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>Products</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>Career</Link>
            </HStack>
            <Button  bg={'white'} px={[5]} fontSize={[25]} borderRadius={77} py={[3]}>Contact Us</Button>
        </HStack>
    )
}

export const NavbarMobile = () => {
    return (
        <></>
    )
}