/* eslint-disable import/extensions */
import React from 'react';
import { Text, Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide1() {
  return (
    <Slide prev="" next="2">
      <Box
        direction="row"
        align="center"
      >
        <Grommet color="plain" size="50px" />
        <Box
          direction="column"
          pad={{
            left: '5px',
          }}
        >
          <Box>
            <Text
              weight="bold"
              size="30px"
              margin="none"
            >
              What is
            </Text>
          </Box>
          <Box>
            <Text
              margin={{
                top: '-26px',
              }}
              weight="bold"
              size="50px"
            >
              grommet?
            </Text>

          </Box>

        </Box>
      </Box>
    </Slide>
  );
}
