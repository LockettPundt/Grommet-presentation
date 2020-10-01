/* eslint-disable import/extensions */
import React from 'react';
import { Text } from 'grommet';
import { Grommet } from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide2() {
  return (
    <Slide prev="1" next="3">
      <Text
        size="large"
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
      </Text>
    </Slide>
  );
}
