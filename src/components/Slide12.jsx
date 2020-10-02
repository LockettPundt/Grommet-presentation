/* eslint-disable import/extensions */
import React from 'react';
import {
  Box, Text, Image,
} from 'grommet';
import Slide from './Slide.jsx';

export default function Slide12() {
  return (
    <Slide prev="11" next="1">
      <Box
        direction="row"
      >
        <Box>
          <Box height="small" width="small">
            <Image fit="cover" src="https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/book-cover-sm.png" />
          </Box>
        </Box>
        <Box
          margin={{
            left: 'small',
          }}
        >
          <Text size="xlarge">
            One last thing...
          </Text>
          <Text size="large" margin={{ top: 'small' }}>
            <strong>Refactoring UI</strong>
          </Text>
          <Text margin={{ top: 'small' }}>
            A book by developers who aren&apos;t designers, for developers
            who aren&apos;t designers.
          </Text>
        </Box>

      </Box>
    </Slide>
  );
}
