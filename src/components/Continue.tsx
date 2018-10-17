import * as React from 'react';
import { Button } from 'react-bootstrap';

export const Continue: React.SFC<{ fetchNext: () => void } & { children?: React.ReactNode }> = ({ fetchNext, children }) => (
    <Button onClick={fetchNext} bsStyle="primary">
        {children}
    </Button>
);