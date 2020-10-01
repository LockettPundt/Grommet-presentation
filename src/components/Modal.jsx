/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import { Box } from 'grommet';

export default function ModalWindow({ children }) {
  return (
    <Box
      width="medium"
      height="medium"
      margin="auto"
      direction="row"
      background={{
        color: '#F8D4CA',
      }}
      elevation="xlarge"
      round="xsmall"
      pad="medium"
      justify="evenly"
      align="center"
      animation="fadeIn"

    >
      {children}
    </Box>
  );
}
