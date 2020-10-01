/* eslint-disable import/extensions */
import React from 'react';
import { Box, Paragraph } from 'grommet';
import Slide from './Slide.jsx';

export default function Slide9() {
  return (
    <Slide prev="8" next="10">
      <Box>
        <Paragraph
          size="large"
        >
          The
          {' '}
          <strong>Gherkin language</strong>
          {' '}
          was originally created for Cucumber, a Ruby
          testing suite, and is meant to “enforce firm, unambiguous requirements…and
          a script for automated testing.”
        </Paragraph>
        {/* <Paragraph
          size="large"
        >
          Using it in a Pivotal story description, it provides the assignee
          a context in which to understand the situation/task, what is happening
          with the current bug/feature and what should
        </Paragraph> */}
      </Box>
    </Slide>
  );
}
