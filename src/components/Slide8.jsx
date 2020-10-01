/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Box } from 'grommet';
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
          <h3>is cool, but now what?...</h3>
        </Box>
      </Box>
      {showNext && (
        <Box
          animation="fadeIn"
          margin={{
            top: 'medium',
          }}
        >
          <strong>Writing Pivotal Stories using Gherkin Language...</strong>
        </Box>
      )}
    </Slide>
  );
}
