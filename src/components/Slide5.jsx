/* eslint-disable import/extensions */
import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Grommet, Figma } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide5() {
  return (
    <Slide prev="4" next="6">
      <Box>
        <Paragraph
          size="large"
        >
          <Grommet size="medium" color="plain" />
          &apos;s reusable components can be mixed and
          matched with your existing components and custom tailored to
          fit your project&apos;s aesthetic.
        </Paragraph>
        <Paragraph
          size="large"
        >
          Themes can also be extended to create a localized context of
          new component properties as needed.
        </Paragraph>
        <Paragraph
          size="large"
        >
          Easy integration with StoryBook,
          {' '}
          <Figma size="medium" color="plain" />
          , or
          {' '}
          <Grommet size="medium" color="plain" />
          &apos;s Design Kit.
        </Paragraph>
        <Paragraph
          size="large"
        >
          And of course, all the
          {' '}
          <span role="img" aria-label="painting nail">💅 </span>
          <strong>styled components</strong>
          {' '}
          magic is
          there too.
        </Paragraph>
      </Box>
    </Slide>
  );
}
