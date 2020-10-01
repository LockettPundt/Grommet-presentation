/* eslint-disable import/extensions */
import React from 'react';
import { Text, Box } from 'grommet';
import {
  Hpi, Figma, Bitcoin, Filter, Favorite, Grommet, Info, Like, Notification, Pin,
  Redhat, Send, Services, SettingsOption, Share, Slack, Sort, StatusGood,
  Twitter, Lock, LocationPin, UserAdmin, UserSettings, Validate, View, StarHalf,
  Attachment,
} from 'grommet-icons';
import Slide from './Slide.jsx';

export default function Slide4() {
  return (
    <Slide prev="3" next="5">
      <Box
        direction="column"
        justify="center"
        align="center"
      >
        <Box
          direction="column"
        >
          <Text
            size="35px"
            weight="bold"
          >
            <em>Awesome..r?</em>
          </Text>
          <Text
            size="xlarge"
          >
            Icon library
          </Text>
          <Box
            direction="row"
            wrap
            margin={{
              top: 'medium',
            }}
            justify="evenly"
          >
            <Bitcoin size="medium" color="plain" />
            <Hpi size="medium" color="plain" />
            <Figma size="medium" color="plain" />
            <Filter size="medium" color="#444444" />
            <Favorite size="medium" color="#444444" />
            <Grommet size="medium" color="plain" />
            <Info size="medium" color="#444444" />
          </Box>
          <Box
            direction="row"
            wrap
            margin={{
              top: 'medium',
            }}
            justify="evenly"
          >
            <Like size="medium" color="#444444" />
            <Redhat size="medium" color="plain" />
            <Notification size="medium" color="#444444" />
            <Pin size="medium" color="#444444" />
            <Send size="medium" color="#444444" />
            <Services size="medium" color="#444444" />
            <SettingsOption size="medium" color="#444444" />
          </Box>
          <Box
            direction="row"
            wrap
            margin={{
              top: 'medium',
            }}
            justify="evenly"
          >
            <Slack size="medium" color="plain" />
            <Share size="medium" color="#444444" />
            <Sort size="medium" color="#444444" />
            <StatusGood size="medium" color="#444444" />
            <StarHalf size="medium" color="#444444" />
            <View size="medium" color="#444444" />
            <Validate size="medium" color="#444444" />
          </Box>
          <Box
            direction="row"
            wrap
            margin={{
              top: 'medium',
            }}
            justify="evenly"
          >
            <UserSettings size="medium" color="#444444" />
            <UserAdmin size="medium" color="#444444" />
            <LocationPin size="medium" color="#444444" />
            <Lock size="medium" color="#444444" />
            <Favorite size="medium" color="#444444" />
            <Twitter size="medium" color="plain" />
            <Attachment size="medium" color="#444444" />
          </Box>
        </Box>
      </Box>
    </Slide>
  );
}
