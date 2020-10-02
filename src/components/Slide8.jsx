/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Box, Text } from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide8() {
  const [showNext, setShowNext] = useState(false);
  return (
    <Slide prev="7" next="9">
      <Box
        direction="row"
        align="center"
        onClick={() => setShowNext(!showNext)}

      >
        <Grommet color="plain" size="medium" />
        <Box
          margin={{
            left: '10px',
          }}
        >
          <Text weight="bold" size="xlarge">is cool, but now what?...</Text>
        </Box>
      </Box>
      {showNext && (
        <Box
          animation="fadeIn"
          margin={{
            top: 'medium',
          }}
          justify="center"
          align="center"
          alignContent="center"
        >
          <Text weight="bold" size="xlarge">Writing Pivotal Stories using</Text>
          <Text weight="bold" size="xlarge">Gherkin Language...?</Text>

        </Box>
      )}
    </Slide>
  );
}
