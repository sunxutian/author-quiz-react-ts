import * as React from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import { Continue } from './components/Continue';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Turn } from './components/Turn';
import IAppStateModel from './models/IAppStateModel';
import ITurnDataModel from './models/ITurnDataModel';

class AuthorQuiz extends React.Component<IAppStateModel, { turnData: ITurnDataModel }>{
  constructor(props: IAppStateModel, state: { turnData: ITurnDataModel }) {
    super(props, state);

    this.state = {
      turnData: this.props.next()
    };
    this.continueAfterSelect = this.continueAfterSelect.bind(this);
  }

  public render() {
    return (
      <Grid fluid={true}>
        <Hero />
        <Turn {...this.state.turnData} />
        <Continue next={this.continueAfterSelect}/>
        <Footer />
      </Grid>
    )
  }

  private continueAfterSelect = () => {
    this.setState({
      turnData: this.props.next()
    });
  }
}


export default AuthorQuiz;
