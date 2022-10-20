import {
  VStack,
  Container,
  Heading,
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  HStack,
  Link,
} from "@chakra-ui/react";
import { IconBg } from "../src/utils";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
// import styles from '../src/styles/Home.module.css'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    // const components = document.querySelectorAll('#component')
    // const container = document.querySelector('#container')

    // gsap.to(components, {
    //   xPercent: -100 * (components.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: container,
    //     pin: true,
    //     scrub: 1,
    //     markers: true,
    //     snap: 1 / (components.length - 1),
    //     end: () => "+=" + container.offsetWidth
    //   }
    // })
  }, [])
  return (
    <VStack>
      <VStack
        w={"full"}
        h={"calc(100vw / 2 + 104px)"}
        pos={"relative"}
        bg="black"
        overflow={"hidden"}
      >
        <Image
          pos={"absolute"}
          src="/assets/svgs/header.svg"
          left={0}
          top={"115px"}
        />

        <Heading
          color={"#fff"}
          pos="absolute"
          fontSize={60}
          fontWeight={"medium"}
          textAlign="center"
          maxWidth={"800px"}
          bottom={"130px"}
        >
          Emowering Lives Through Technology Forever
        </Heading>
      </VStack>
      <VStack
        w={"full"}
        sx={{ m: "0 !important" }}
        pos="relative"
        overflow={"hidden"}
      >
        <HStack>
          <Image pos={"relative"} left={"-50%"} src="/assets/svgs/bg.svg" />
          <Image
            sx={{ m: "0 !important" }}
            pos={"relative"}
            right={"50%"}
            src="/assets/svgs/bg.svg"
          />
        </HStack>
        <Text
          maxW={["742px"]}
          fontSize={35}
          pos="absolute"
          top={"25%"}
          transform={"translateY(-100%)"}
          textAlign="center"
        >
          We are a technology company that understands complexity of lives and
          with our technical and business expertise, we incubate, nourish and
          grow startups
        </Text>
        <Heading
          maxW={["742px"]}
          fontSize={60}
          fontWeight={"medium"}
          textAlign="center"
          pos={"absolute"}
          bottom={"3vw"}
        >
          Our achievements so far
        </Heading>

        <Grid
          gridTemplateColumns={"repeat(2, 1fr)"}
          gap={"2vw"}
          pos="absolute"
          bottom={"14vw"}
          transform={"rotate(45deg)"}
        >
          <GridItem>
            <IconBg>
              <Image
                src="/assets/imgs/rocket.png"
                transform={"rotate(-45deg)"}
                w={"6.4vw"}
              />
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Image
                src="/assets/imgs/rocket.png"
                transform={"rotate(-45deg)"}
                w={"6.4vw"}
              />
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Image
                src="/assets/imgs/rocket.png"
                transform={"rotate(-45deg)"}
                w={"6.4vw"}
              />
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Image
                src="/assets/imgs/rocket.png"
                transform={"rotate(-45deg)"}
                w={"6.4vw"}
              />
            </IconBg>
          </GridItem>
        </Grid>
      </VStack>
      <VStack
        h="50vw"
        pos={"relative"}
        sx={{ m: "0 !important" }}
        w="full"
        bgImage={"/assets/svgs/triangle.svg"}
        bgRepeat={"no-repeat"}
        bgSize="contain"
      >
        <Box h='full' w='full' bg={'black'} pos='absolute' zIndex={-1}/> 
        <Box h={"100px"} />
        <Heading
          color={"#fff"}
          fontSize={60}
          fontWeight={"medium"}
          textAlign="center"
          maxWidth={"800px"}
        >
          Emowering Lives Through Technology Forever
        </Heading>

        <Box h={"100px"} />
        <Text maxW={["742px"]} color="white" fontSize={35} textAlign="center">
          We are a technology company that understands complexity of lives and
          with our technical and business expertise, we incubate, nourish and
          grow startups
        </Text>
      </VStack>
      <Heading
        py={"140px"}
        fontSize={60}
        fontWeight={"medium"}
        textAlign="center"
        maxWidth={"800px"}
      >
        Emowering Lives Through Technology Forever
      </Heading>

      {/* <div id="container" className={styles.container}>

      <div id="component" className={styles.one}>Primeiro</div>
      <div id="component" className={styles.two}>Segundo</div>
      <div id="component" className={styles.three}>Terceiro</div>
      <div id="component" className={styles.four}>Quarto</div>
      <div id="component" className={styles.five}>Quinto</div>

    </div> */}

      <VStack w="full">
        <Box
          w="full"
          px={"60px"}
          pt={66}
          pb={100}
          bg={"main.neon"}
          pos="relative"
        >
          <Link href="/">
            {" "}
            <Image
              src="/assets/svgs/more_white.svg"
              bottom={"80px"}
              right={"80px"}
              pos={"absolute"}
            />
          </Link>
          <Heading
            color={"white"}
            fontSize={60}
            fontWeight={"medium"}
            maxWidth={"600px"}
          >
            Become an ever growing Tomujiner!
          </Heading>
          <Box h={"90px"} />
          <Text color={"white"} maxW={["765px"]} fontSize={["20px"]}>
            We believe in the process of continuous improvement and consider
            ourselves lifelong learners. If you are passionate about learning
            and building completely new ideas, join us! You will not regret it!
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
}
