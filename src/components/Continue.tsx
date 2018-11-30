import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Subtract } from 'utility-types'

export const Continue: React.SFC<{ fetchNext: () => void } & { children?: React.ReactNode }> = ({ fetchNext, children }) => (
    <Button onClick={fetchNext} bsStyle="primary">
        {children}
    </Button>
);

interface IInjectedProps<T> {
    data?: T
}

export function withSubScription<TData, TWrappedProps extends IInjectedProps<TData>>
    (WrappedComponent: React.ComponentType<TWrappedProps>, getData: () => TData) {

    interface IHocState { data?: TData; }

    type HocProps = Subtract<TWrappedProps, IInjectedProps<TData>>;

    return class extends React.Component<HocProps, IHocState> {
        public static displayName:string = `withSubscription${WrappedComponent.displayName}`;
        public readonly state: IHocState = {
            data: getData()
        }

        constructor(props: HocProps) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: getData()
            };
        }
        public render() {
          return (
            <WrappedComponent data={this.state.data} {...this.props}/>
          )
        }

        private handleChange() {
            this.setState({
                data: getData()
            })
        }
    }
}
