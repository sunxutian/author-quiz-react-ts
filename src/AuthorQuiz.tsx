import * as React from 'react';
import { Alert, Col, Grid, Row } from 'react-bootstrap';
import Circle from 'react-circle';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

import { ConnectedContinue } from './containers/Continue';
import { ConnectedTurn } from './containers/Turn';

export interface IAuthorProps {
  error?: Error | null;
  isFeching: boolean;
  loadingProgress: number
}

export class AuthorQuiz extends React.Component<IAuthorProps & { requestInitData: () => void }>{

  public componentDidMount() {
    this.props.requestInitData();
  }

  public render() {
    return <Grid fluid={true}>
      <Hero />
      {this.props.isFeching ?
        <div>
          <Row>
            <Col md={6} sm={6} smOffset={4} mdOffset={4}>
              <Circle responsive={false} animate={true} showPercentage={true} progress={this.props.loadingProgress}
                progressColor="cornflowerblue"  // String: Color of "progress" portion of circle.
                bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                textColor="hotpink" // String: Color of percentage text color.
                textStyle={{
                  font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                }} />
            </Col>
          </Row>
        </div>
        :
        this.props.error === null || this.props.error === undefined ?
          <div>
            <ConnectedTurn />
            <ConnectedContinue>
              Continue
          </ConnectedContinue>
          </div> :
          <Alert bsStyle="danger">
            <strong>Something wrong happens, Error: {this.props.error.message}</strong>
          </Alert>
      }
      <Footer />
    </Grid>
  }
}

