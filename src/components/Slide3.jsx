/* eslint-disable import/extensions */
import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide3() {
  return (
    <Slide prev="2" next="4">
      <Box>
        <Paragraph
          size="xlarge"
          margin={{
            bottom: '10px',
          }}
        >
          Based in
          {' '}
          💅
          <strong> Styled Components</strong>
          {' '}
          and flex box
          .
        </Paragraph>
        <Paragraph
          size="xlarge"
        >
          <Grommet size="medium" color="plain" />
          {' '}
          utilizes a global theme context to create a cohesive
          UI experience as well as a responsive layout, out of the box.
        </Paragraph>
      </Box>
    </Slide>
  );
}
