import * as React from 'react';
import { Button } from 'react-bootstrap';

export const Continue = ({ next, children }: { next: () => void } & { children?: React.ReactNode }) => (
    <Button onClick={next} bsStyle="primary">
        {children}
    </Button>
);