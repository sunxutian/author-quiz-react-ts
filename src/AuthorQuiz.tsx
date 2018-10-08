import * as React from 'react';
// import { Alert, Button, Grid, Jumbotron, Navbar } from 'react-bootstrap';
import './App.css';
import { Continue } from './components/Continue';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Turn } from './components/Turn';
import IAppStateModel from './models/IAppStateModel';

class AuthorQuiz extends React.Component<IAppStateModel> { 
  public render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...this.props.turnData}/>
        <Continue />
        <Footer />
      </div>
    );
  }

}


export default AuthorQuiz;
