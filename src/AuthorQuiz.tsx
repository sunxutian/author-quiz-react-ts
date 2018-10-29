import * as React from 'react';
import { Alert, Col, Grid, Row } from 'react-bootstrap';
import Circle from 'react-circle';
import { RouteComponentProps } from 'react-router';
import './App.css';
import asyncComponent from './containers/AsyncContainer';

export interface IAuthorProps {
  error?: Error | null;
  isFeching: boolean;
  loadingProgress: number
}

const AsyncContinue = asyncComponent(() => import("./containers/Continue"));
const AsyncTurn = asyncComponent(() => import("./containers/Turn"));
const AsyncHero = asyncComponent(() => import("./components/Hero"));
const AsyncFooter = asyncComponent(() => import("./components/Footer"));

export class AuthorQuiz extends React.Component<IAuthorProps & { requestInitData: () => void } & RouteComponentProps>{

  public componentDidMount() {
    this.props.requestInitData();
  }

  public render() {
    return <Grid fluid={true}>
      <AsyncHero />
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
            <h1>{this.props.location.pathname}</h1>
            <AsyncTurn />
            <AsyncContinue>
              Continue
            </AsyncContinue>
          </div> :
          <Alert bsStyle="danger">
            <strong>Something wrong happens, Error: {this.props.error.message}</strong>
          </Alert>
      }
      <AsyncFooter />
    </Grid>
  }
}

