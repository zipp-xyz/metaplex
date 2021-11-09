import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box py={10} mt={48}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.600',
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: 'gray.600',
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Box width="100px">
          <img src={'/zipp-logo.svg'} />
        </Box>
      </Flex>
      <Text pt={6} fontSize={'sm'} textAlign={'center'}>
        © 2021 Zipp. All rights reserved
      </Text>
    </Box>
  );
};
