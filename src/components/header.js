import { Button, HStack, Image, Link } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <HStack justifyContent={'space-between'} alignItems='center' w='full' px={[8]} py={[8]} pos='absolute' top={0} zIndex={100}>
            <Image src="/assets/imgs/tt_logo.png" h={[33]}/>
            <HStack gap={[6]} color='white' fontSize={[25]}>
                <Link href="/" _hover={{textDecor:'none'}}>Home</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>About Us</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>Products</Link>
                <Link href="/"  _hover={{textDecor:'none'}}>Career</Link>
            </HStack>
            <Button  bg={'main.neon'} color='black<svg width="1916" height="1916" viewBox="0 0 1916 1916" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="958.204" y="0.91027" width="1353.53" height="1353.53" transform="rotate(45 958.204 0.91027)" stroke="white"/>
</svg>
' px={[5]} fontSize={[25]} borderRadius={77} py={[3]}>Contact Us</Button>
        </HStack>
    )
}

export const NavbarMobile = () => {
    return (
        <></>
    )
}