/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Grommet, Box, Anchor,
} from 'grommet';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import MainTheme from './themes/mainTheme';
import Slide1 from './components/Slide1.jsx';
import Slide2 from './components/Slide2.jsx';
import Slide3 from './components/Slide3.jsx';
import Slide4 from './components/Slide4.jsx';
import Slide5 from './components/Slide5.jsx';
import Slide6 from './components/Slide6.jsx';
import Slide7 from './components/Slide7.jsx';
import Slide8 from './components/Slide8.jsx';
import Slide9 from './components/Slide9.jsx';
import Slide10 from './components/Slide10.jsx';
import Slide11 from './components/Slide11.jsx';
import Slide12 from './components/Slide12.jsx';

export default function App() {
  return (
    <Grommet theme={MainTheme}>
      <Router>
        <Main
          direction="column"
          justify="center"
          align="center"
        >
          <Switch>
            <Route exact path="/">
              <Anchor href="/1" label="Let's get started." color="#F8D4CA" size="xlarge" />
            </Route>
            <Route path="/1" component={Slide1} />
            <Route path="/2" component={Slide2} />
            <Route path="/3" component={Slide3} />
            <Route path="/4" component={Slide4} />
            <Route path="/5" component={Slide5} />
            <Route path="/6" component={Slide6} />
            <Route path="/7" component={Slide7} />
            <Route path="/8" component={Slide8} />
            <Route path="/9" component={Slide9} />
            <Route path="/10" component={Slide10} />
            <Route path="/11" component={Slide11} />
            <Route path="/12" component={Slide12} />
          </Switch>
        </Main>
      </Router>
    </Grommet>
  );
}

const Main = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: #444444;
`;
