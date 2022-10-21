import { Box, Divider, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"

export const SwiperComponent = ({img, title, text, href, link1, link2, link3}) => {
    return (
        <HStack pos={"relative"} flexDir={['column', 'column', 'row']} w="full" height={['auto','auto','auto', 'auto', "auto"]} overflow="hidden">
            <Box ml={[0,0, "-35%"]}
              height={['auto', 'auto','auto','auto', "auto"]}
              top={0}
              w={['90vw', '80vw', 'full']}
              pos="relative">
            <Image
              src="/assets/svgs/swiper_bg.svg"
              height="100%"
              width={'100%'}
              objectFit="cover"
            />
            <Box pos={"absolute"} zIndex={10} left={'60%'} transform='translate(-50%, -50%)' height={"auto"} maxW='30vw' top={'50%'}>
              <Image src={`/assets/imgs/${img}.png`} />
            </Box>
            </Box>
            <Box h={['100px', '100px', 0]}/>
            <VStack
              color={"white"}
              justifyContent="space-between"
              h={['auto','auto','full', "full"]}
              w={['full','full', '40vw', '37vw', "28vw"]}
              alignItems={"start"}
            >
              <VStack
                alignItems={"start"}
                pos={"relative"}
                left={["-50%","-50%","-30%","-40%","-50%"]}
                top={"2%"}
                display={['none','none', 'flex']}
              >
                <Text >{link1}</Text>
                <Text color={'#02EAB1'}>{link2}</Text>
                <Text>{link3}</Text>
              </VStack>
              <VStack
                alignItems={"start"}
                pos="relative"
                left={["20px",'20px', 0,0, '20px']}
                maxW={['80%', '70%', "25vw"]}
                py={[0,0, '60px','15vw', 'calc(10vw + 10vh)']}
              >
                <Heading fontSize={35} fontWeight="normal" whiteSpace={'nowrap'}>
                  {title}
                </Heading>
                <Box h={"10px"} />
                <Text textAlign={"start"}>
                  {text}
                </Text>
              </VStack>
              <Box h={['40px', 0]}/>
              <VStack
                alignItems={"start"}
                pos={"relative"}
                left={['20px', '20px', '-30%',"-40%", "-50%"]}
                w={['full', 'full', "27vw"]}
                bottom={"2%"}
              >
                <Divider my={4} w={['calc(100vw - 40px)', 'calc(100vw - 70px)', '20vw', '20vw', '20vw']}/>
                <Link href={href ? href : '/'}>
                  <HStack alignItems={"center"}>
                    <Box w={['30px', "14px"]} height={"auto"}>
                      <Image src="/assets/svgs/more.svg" />
                    </Box>
                    <Box w={['10px', 0]}/>
                    <Text lineHeight={1} fontSize={"20px"} color={['white', '#02EAB1']}>
                      Read more
                    </Text>
                  </HStack>
                </Link>
              </VStack>
            </VStack>

            <Image
              src="/assets/svgs/swiper_bg.svg"
              pos={"absolute"}
              right="-72%"
              height={[0, 0, "100%"]}
              top={0}
              objectFit="contain"
              display={['none', 'none', 'block']}
            />
          </HStack>
    )
}