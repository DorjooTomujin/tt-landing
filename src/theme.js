import { extendTheme } from "@chakra-ui/react";
const fonts = {
     body: `'Menlo', monospace`,
     heading: `'Menlo', monospace`,
};

const breakpoints = {
     sm: "500px",
     md: "768px",
     lg: "960px",
     xl: "1200px",
     "2xl": "1536px",
};

const components = {
     Link: {
          baseStyle: {
               _hover: { textDecoration: "none" },
          },
     },
     Button: {
          baseStyle: {
               borderRadius: "77",
               paddingY: "22px",
          },
          variants: {
               neonButton: {
                    transition: "0.3s ease",
                    bgColor: "main.neon",
                    color: "black",
                    _hover: {
                         bgColor: "white",
                    },
               },
          },
     },
};

const theme = extendTheme({
     breakpoints,
     styles: {
          global: {
               body: {
                    color: "#3F1DA8",
               },
          },
     },
     colors: {
          main: {
               neon: "#00EBB1",
               purple: "#3F1DA8",
          },
     },
     components,
     fonts,
});

export default theme;
