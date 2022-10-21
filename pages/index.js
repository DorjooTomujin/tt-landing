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
  Divider,
} from "@chakra-ui/react";
import { IconBg } from "../src/utils";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
// import styles from '../src/styles/Home.module.css'
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { SwiperComponent } from "../src/components/swiperComponent";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

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
  }, []);
  return (
    <VStack bg={"main.purple"}>
      <VStack
        w={"full"}
        h={["100vh"]}
        pos={"relative"}
        bg="black"
        pt={"115px"}
        overflow={"hidden"}
      >
        <Box
          w="300vw"
          h="100vh"
          pos={"sticky"}
          bgImage="/assets/svgs/header.svg"
          bgPos={"top center"}
          bgSize={"cover"}
          zIndex="10"
          bgRepeat="no-repeat"
          overflow={"hidden"}
        />
        <Box
          w={["80%", "70%", "60%", "55%", "50%"]}
          h={["80%", "70%", "60%", "55%", "50%"]}
          top={["50px", "60px", "80px", "100px", "100px"]}
          pos={"absolute"}
          bgImage="/assets/svgs/hr.svg"
          bgSize={"contain"}
          bgPos={"top center"}
          bgRepeat="no-repeat"
        />
        <Heading
          color={"#fff"}
          pos="absolute"
          bottom={[100, 60, 40, 20, 20]}
          zIndex={2}
          display="inline"
          fontSize={[40, 40, 45, 50, 60]}
          fontWeight={"medium"}
          textAlign="center"
          maxWidth={["80%", "70%", "60%", "50%", "40%"]}
        >
          Emowering Lives Through Technology Forever
        </Heading>
      </VStack>
      <VStack
        w={"full"}
        h={['100vh', 'auto']}
        sx={{ m: "0 !important" }}
        pos="relative"
        overflow={"hidden"}
      >
        <Box
          pos="absolute"
          top={0}
          bgGradient="linear(to-b, black,  #3F1DA8 )"
          h={[
            "calc(50% + 12.5vh - 1rem)",
            "calc(50% + 10vh - 1rem)",
            "calc(50% + 7.5vh - 1rem)",
            "calc(50% + 5vh - 1rem)",
            "calc(50% - 0.5rem)",
          ]}
          w="full"
          zIndex={0}
        />
        
        <Text
          maxW={["70%", "60%", "55%", "45%", "40%"]}
          fontSize={[20, 24, 28, 32, 35]}
          pos="absolute"
          top={["18%", "25%"]}
          transform={"translateY(-100%)"}
          textAlign="center"
          zIndex={2}
          color="white"
        >
          We are a technology company that understands complexity of lives and
          with our technical and business expertise, we incubate, nourish and
          grow startups
        </Text>
        <Box h={["20vh", "15vh", "10vh", "5vh", "0"]} />
        <HStack>
          <Image pos={"relative"} left={"-50%"} src="/assets/svgs/bg.svg" />
          <Image
            sx={{ m: "0 !important" }}
            pos={"relative"}
            right={"50%"}
            src="/assets/svgs/bg.svg"
          />
        </HStack>
          
        <Heading
          maxW={["742px"]}
          fontSize={[40, 40, 45, 50, 60]}
          fontWeight={"medium"}
          textAlign="center"
          pos={"absolute"}
          bottom={"50px"}
          color='white'
          zIndex={10}
        >
          Our achievements so far
        </Heading>

        <Grid
          gridTemplateColumns={"repeat(2, 1fr)"}
          gap={['4vw',"2vw"]}
          pos="absolute"
          bottom={["55vw","45vw",'32vw',"14vw"]}
          transform={"rotate(45deg)"}
        >
          <GridItem>
            <IconBg>
              <Box
                w={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                h={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  h={["70%",'70%', '75%', '80%', 'full']}
                  w={["70%", '70%', '75%', '80%', 'full']}
                  src="/assets/imgs/rocket.png"
                  transform={"rotate(-45deg)"}
                />
              </Box>
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Box
                w={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                h={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  h="full"
                  src="/assets/imgs/handshake.png"
                  transform={"rotate(-45deg)"}
                />
              </Box>
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Box
                w={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                h={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  h="full"
                  src="/assets/imgs/profile.png"
                  transform={"rotate(-45deg)"}
                />
              </Box>
            </IconBg>
          </GridItem>
          <GridItem>
            <IconBg>
              <Box
                w={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                h={['23vw','23vw', '18vw', "13vw","6.4vw"]}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  h="full"
                  src="/assets/imgs/winner.png"
                  transform={"rotate(-45deg)"}
                />
              </Box>
            </IconBg>
          </GridItem>
        </Grid>
        <Box h={['150vw', '80vw', '60vw', '20vw', '0']}/>
      </VStack>
      <Box h={[0, '5vw', 0]}/>
      <VStack
        h={['auto', '50%']}
        pos={"relative"}
        sx={{ m: "0 !important" }}
        w="full"
        bgImage={["/assets/svgs/rectangle.svg","/assets/svgs/rectangle.svg","/assets/svgs/triangle.svg"]}
        bgRepeat={"no-repeat"}
        bgSize={ "contain"}
     
      >
        <Box h="full" w="full" bg={"black"} pos="absolute" zIndex={-1} />
        <Box h={["55vw","60vw",'8vw', '100px', '5vw']} />
        <Heading
          color={"#fff"}
          fontSize={[40, 55, 35, 50, 60]}
          fontWeight={"medium"}
          textAlign="center"
          lineHeight={1}
          maxWidth={["70%", " 80%","60%","800px"]}
          pb={['0', '15vw',0]}
        >
          Emowering Lives Through Technology Forever
        </Heading>

        <Box h={['90px','100px', '40vw', '35vw',  "3vw"]} />
        <Text maxW={["70%",'80%',"40%"]}  color="white" fontSize={[20, 35, 28, 32, '2vw']} textAlign="center">
          We are a technology company that understands complexity of lives and
          with our technical and business expertise, we incubate, nourish and
          grow startups
        </Text>
        <Box h={["55vw",'75vw',0, 0, 'calc(30vw - 100px)']} />
      </VStack>
      <VStack
        w={"full"}
        bgGradient={"linear(to-b, #3F1DA8 , black)"}
        sx={{ m: "0 !important" }}
      >
        <Heading
          py={['50px','50px',"140px"]}
          mb={['50px', 0]}
          fontSize={[40, 40, 45, 50, 60]}
          fontWeight={"medium"}
          textAlign="center"
          maxWidth={"800px"}
          color="white"
        >
          What we are incubating now?
        </Heading>
        <Swiper
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
          effect={"fade"}
          loop={true}
          navigation={true}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperComponent
              title={"Tiny Battle Game"}
              text="Tiny Battle community-д нэгдэж хамгийн АНХНЫ тулаануудад оролцоорой ⚔️"
              link2={"Tiny Battle Game"}
              link1="Bit Academy"
              link3={"ELFc"}
              href="tinylearn.io"
              img={"tiny"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperComponent
              title={"Tiny Battle Game"}
              text="Tiny Battle community-д нэгдэж хамгийн АНХНЫ тулаануудад оролцоорой ⚔️"
              link1={"Tiny Battle Game"}
              link2="ELFc"
              link3={"NFT.mn"}
              href="tinylearn.io"
              img={"elfc"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperComponent
              title={"Tiny Battle Game"}
              text="Tiny Battle community-д нэгдэж хамгийн АНХНЫ тулаануудад оролцоорой ⚔️"
              link1={"ELFc"}
              link2="NFT.mn"
              link3={"Bit Academy"}
              href="nft.mn"
              img={"nft"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperComponent
              title={"Tiny Battle Game"}
              text="Tiny Battle community-д нэгдэж хамгийн АНХНЫ тулаануудад оролцоорой ⚔️"
              link1={"NFT.mn"}
              link3="Tiny Battle Game"
              link2={"Bit Academy"}
              href="nft.mn"
              img={"bit"}
            />
          </SwiperSlide>
        </Swiper>
        <Box h={['120px', "120px"]} />
      </VStack>
      <VStack w="full" sx={{ m: "0 !important" }}>
        <Box
          w="full"
          px={['18px', "60px"]}
          pt={['18px', 66]}
          pb={['180px', 100]}
          bg={"main.purple"}
          pos="relative"
        >
          <Link href="/">
            {" "}
            <Image
              src={["/assets/svgs/more.svg"]}
              bottom={['30px', '40px','50px', '60px', "80px"]}
              right={['30px', '40px', '50px','60px', "80px"]}
              pos={"absolute"}
              w={['48px', '48px', '54px', '70px', 'auto']}
            />
          </Link>
          <Heading
            color={"white"}
            fontSize={[40, 40, 45, 50, 60]}
            fontWeight={"medium"}
            maxWidth={"600px"}
          >
            Become an ever growing Tomujiner!
          </Heading>
          <Box h={['24px', 30, "90px"]} />
          <Text color={"white"} maxW={["765px"]} fontSize={[16, 16, "20px"]}>
            We believe in the process of continuous improvement and consider
            ourselves lifelong learners. If you are passionate about learning
            and building completely new ideas, join us! You will not regret it!
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
}
