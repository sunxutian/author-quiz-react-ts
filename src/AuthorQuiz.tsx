import * as React from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import { Continue } from './components/Continue';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Turn } from './components/Turn';
import {IAppState} from './types';

class AuthorQuiz extends React.Component<IAppState>{
  constructor(props: IAppState) {
    super(props);
  }

  public render() {
    return (
      <Grid fluid={true}>
        <Hero />
        <Turn {...this.props.turnData} />
        <Continue next={this.props.next}>
          Continue
        </Continue>
        <Footer />
      </Grid>
    )
  }
}


export default AuthorQuiz;
