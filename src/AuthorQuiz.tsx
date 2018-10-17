import * as React from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

import { ConnectedContinue } from './containers/Continue';
import { ConnectedTurn } from './containers/Turn';

export const AuthorQuiz = () => (
  <Grid fluid={true}>
    <Hero />
    <ConnectedTurn />
    <ConnectedContinue>
      Continue
  </ConnectedContinue>
    <Footer />
  </Grid>
);
