import { extendTheme } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "./theme/foundations/colors";
import { fonts } from "./theme/foundations/fonts";
import { Button } from "./theme/components/Button";
import { Heading } from "./theme/components/Heading";
import { tabsVariants } from "./theme/components/Tabs";
import { linkVariants } from "./theme/components/Link";

const { definePartsStyle } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

export const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      500: '#2F5356',
    },
    secondary: {
      900: '#3F5B5F',
    },
    custom: {
      footer: '#FCED8C',
    },
  },
  fonts,
  styles: {
    global: {
      body: {
        fontFamily: fonts.questrial,
        bg: "background",
      },
      'footer': {
        backgroundColor: 'custom.footer', 
        color: 'white',
        width: '100%',
        height: '120px',
      },
      'header': {
        backgroundColor: 'primary.500', 
        color: 'white',
        width: '100%',
        height: '80px',
      },
    },
  },
  components: {
    Card: {
      baseStyle: {},
      variants: {
        elevated: definePartsStyle({
          container: {
            boxShadow:
              "0px 5px 12px 0px rgba(51, 67, 70, 0.10), 0px 22px 22px 0px rgba(51, 67, 70, 0.09), 0px 49px 29px 0px rgba(51, 67, 70, 0.05), 0px 87px 35px 0px rgba(51, 67, 70, 0.01), 0px 135px 38px 0px rgba(51, 67, 70, 0.00)",
          },
        }),
      },
    },
    Button,
    Heading,
    Tabs: tabsVariants,
    Link: linkVariants
  },
});
