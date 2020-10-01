/* eslint-disable import/extensions */
import React from 'react';
import { Box, Anchor } from 'grommet';
import { Grommet, Github } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide7() {
  return (
    <Slide prev="6" next="8">
      <Box>
        <Box
          direction="row"
          align="center"
        >
          <Grommet size="medium" color="plain" />
          <Box
            margin={{
              left: '10px',
            }}
          >
            <Anchor href="https://v2.grommet.io/" label="Grommet V2" target="blank" />
          </Box>
        </Box>
        <Box
          direction="row"
          align="center"
          alignContent="around"
          margin={{
            top: '20px',
          }}
        >
          <Github size="medium" color="plain" />
          <Box
            margin={{
              left: '10px',
            }}
          >
            <Anchor href="https://github.com/grommet/grommet" label="Grommet GitHub" target="blank" />
          </Box>
        </Box>
        <Box
          direction="row"
          align="center"
          alignContent="around"
          margin={{
            top: '20px',
          }}
        >
          <Github size="medium" color="plain" />
          <Box
            margin={{
              left: '10px',
            }}
          >
            <Anchor href="https://github.com/grommet/design-kit" label="Grommet Design kit" target="blank" />
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
