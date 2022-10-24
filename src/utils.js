import { Box, Link, Tag } from "@chakra-ui/react";

export const IconBg = ({ children }) => {
     return (
          <Box w="full" h="full">
               <Tag bg={"black"} p={"2vw"} borderRadius={25}>
                    {children}
               </Tag>
          </Box>
     );
};

export const FooterLink = ({ text, href }) => {
     return (
          <Link
               href={href}
               fontSize={[15, 18, 20, 25]}
               _hover={{
                    color: "main.neon",
               }}
               transition="0.3s ease"
          >
               {text}
          </Link>
     );
};
