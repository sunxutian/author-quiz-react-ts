import * as React from 'react';
import { Button } from 'react-bootstrap';

export const Continue = ({ next }: { next: () => void }) => (
    <Button onClick={next} bsStyle="primary">
        Continue
    </Button>
);