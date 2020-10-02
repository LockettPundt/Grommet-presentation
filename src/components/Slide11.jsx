/* eslint-disable import/extensions */
import React from 'react';
import {
  Box, Text,
} from 'grommet';
import Slide from './Slide.jsx';

export default function Slide11() {
  return (
    <Slide prev="10" next="12">
      <Box>
        <h3>An example may look like...</h3>
        <Box
          background={{
            color: '#444444',
          }}
          round="xsmall"
          pad="small"
        >
          <Text size="medium" color="#F8D4CA">
            <strong>Feature:</strong>
            {' '}
            A delicious falafel, manifested at will.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>Scenario:</strong>
            {' '}
            Our hero Lockett has had a long day of coding and is very very hungry, with
            little, to no will to do anything about it.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>Given:</strong>
            {' '}
            He is very lazy and has a general ineptitude at successfully
            making falafel.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>And</strong>
            {' '}
            The laziness factor cannot be overstated.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>When:</strong>
            {' '}
            He snaps his fingers.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>And</strong>
            {' '}
            And clicks the heels of his Crocs.
          </Text>
          <Text size="medium" color="#F8D4CA" margin={{ top: 'small' }}>
            <strong>Then:</strong>
            {' '}
            As improbable as it may seem, a delicious falafel appears.
          </Text>
        </Box>
      </Box>
    </Slide>
  );
}
