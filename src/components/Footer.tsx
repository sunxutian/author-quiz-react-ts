import * as React from 'react';
import { Col } from 'react-bootstrap';

export default () => (
    <Col sm={12} md={12}>
        <p className="text-muted credit">
            All images are from <a href="http://commons.wikimedia.org">
                Wikimedia Commons
            </a> and are in public domain
        </p>
    </Col>
)