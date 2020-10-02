/* eslint-disable import/extensions */
import React from 'react';
import { Box, Paragraph } from 'grommet';
import Slide from './Slide.jsx';

export default function Slide9() {
  return (
    <Slide prev="8" next="10">
      <Box>
        <Paragraph
          size="xlarge"
        >
          The
          {' '}
          <strong>Gherkin language</strong>
          {' '}
          was originally created for Cucumber, a Ruby
          testing suite, and is meant to “enforce firm, unambiguous requirements…and
          a script for automated testing.”
        </Paragraph>
      </Box>
    </Slide>
  );
}
