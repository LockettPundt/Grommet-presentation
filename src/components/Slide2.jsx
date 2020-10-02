/* eslint-disable import/extensions */
import React from 'react';
import { Paragraph } from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide2() {
  return (
    <Slide prev="1" next="3">
      <Paragraph
        size="xlarge"
      >
        <Grommet size="medium" color="plain" />
        {' '}
        is a
        {' '}
        <strong>
          React based
          {' '}
          UI
        </strong>
        {' '}
        framework that provides accessibility,
        modularity, responsiveness, and theming in a tidy package.
      </Paragraph>
    </Slide>
  );
}
