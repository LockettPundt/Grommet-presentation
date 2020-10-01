/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Anchor } from 'grommet';
import { Subtract, Add } from 'grommet-icons';

const Slide = ({
  children, prev, next,
}) => (
  <Box
    width="60%"
    height="450px"
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
    <Box
      width="15%"
      align="center"
    >
      <Anchor icon={<Subtract size="large" />} href={`/${prev}`} />
    </Box>
    <Box
      width="70%"
      direction="column"
      align="center"
    >
      {children}
    </Box>
    <Box
      width="15%"
      align="center"
    >
      <Anchor icon={<Add size="large" />} href={`/${next}`} />
    </Box>
  </Box>
);

export default Slide;
