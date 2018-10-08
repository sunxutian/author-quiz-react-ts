import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Hero = () => (
    <div className="row">
        <Jumbotron className="col-10 offset-1">
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown</p>
        </Jumbotron>
    </div>
)