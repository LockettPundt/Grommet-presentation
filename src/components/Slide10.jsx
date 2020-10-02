/* eslint-disable import/extensions */
import React from 'react';
import { Box, Text } from 'grommet';
import Slide from './Slide.jsx';

export default function Slide10() {
  return (
    <Slide prev="9" next="11">
      <Box
        direction="column"
      >
        <h3>The syntax for a story may follow...</h3>
        <Text size="large" margin={{ top: 'small' }}>
          <strong>Feature:</strong>
          {' '}
          a short description that outlines the desired outcome.
        </Text>
        <Text size="large" margin={{ top: 'small' }}>
          <strong>Scenario:</strong>
          {' '}
          a bit of context surrounding the feature/bug.
        </Text>
        <Text size="large" margin={{ top: 'small' }}>
          <strong>Given:</strong>
          {' '}
          some precondition.
        </Text>
        <Text size="large" margin={{ top: 'small' }}>
          <strong>When:</strong>
          {' '}
          some action.
        </Text>
        <Text size="large" margin={{ top: 'small' }}>
          <strong>Then:</strong>
          {' '}
          some testable outcome.
        </Text>
        <Text size="large" margin={{ top: 'small' }}>
          Each declaration can be chained by adding
          {' '}
          <strong>AND</strong>
          {' '}
          statements.
        </Text>
      </Box>
    </Slide>
  );
}
