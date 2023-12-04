'use client'
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import { HeaderNav } from './HeaderNav';

const Header = () => {
  const [display, changeDisplay] = useState('none');

  return (
    <Box
      as="header"
      borderBottom="1px solid #eaeaea"
      py={4}
      px={9}
      height="100px"
      position="relative"
    >
      <Flex ml="15px" alignItems="center">
        <NextLink href="/">
          <Image
            src="/footerImg/LogoBlanco.png"
            alt="logo blanco"
            width={70}
            height={50}
          />
        </NextLink>
        <Box
        ml="50%"
        >
        <HeaderNav />
        </Box>
        
      </Flex>
    </Box>
  );
};

export default Header;
