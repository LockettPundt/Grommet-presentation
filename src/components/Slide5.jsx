/* eslint-disable import/extensions */
import React from 'react';
import { Text, Box } from 'grommet';
import { Grommet, Figma } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide5() {
  return (
    <Slide prev="4" next="6">
      <Box>
        <Text
          size="large"
        >
          <Grommet size="medium" color="plain" />
          &apos;s reusable components can be mixed and
          matched with your existing components and custom tailored to
          fit your project&apos;s aesthetic.
        </Text>
        <Text
          size="large"
          margin={{
            top: '10px',
          }}
        >
          Themes can also be extended to create a localized context of
          new component properties as needed.
        </Text>
        <Text
          size="large"
          margin={{
            top: '10px',
          }}
        >
          Easy integration with StoryBook,
          {' '}
          <Figma size="medium" color="plain" />
          , or
          {' '}
          <Grommet size="medium" color="plain" />
          &apos;s Design Kit.
        </Text>
        <Text
          size="large"
          margin={{
            top: '10px',
          }}
        >
          And of course, all the
          {' '}
          <span role="img" aria-label="painting nail">💅 </span>
          <strong>styled components</strong>
          {' '}
          magic is
          there too.
        </Text>
      </Box>
    </Slide>
  );
}
