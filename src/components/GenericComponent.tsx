import * as React from 'react';
import { Subtract } from 'utility-types'

interface IGenericListProps<T> {
    items: T[];
    itemRender: (t: T) => React.ReactNode;
}

export class GenericListComponent<T> extends React.Component<IGenericListProps<T>, {}>{

    public render() {
        return <div>
            {this.props.items.map(this.props.itemRender)}
        </div>
    }
}

interface IInjectedProps {
    count: number;
    onIncrement: () => any;
}

export const withState = <WrappedProps extends IInjectedProps>(
    WrappedComponent: React.ComponentType<WrappedProps>
) => {
    type HocProps = Subtract<WrappedProps, IInjectedProps> & {
        initCount?: number;
    };

    interface IHocState {
        readonly count: number;
    }

    // tslint:disable-next-line:max-classes-per-file
    return class WithState extends React.Component<HocProps, IHocState>{
        public static displayName = `withState(${WrappedComponent.displayName})`;
        public static readonly WrappedComponent = WrappedComponent;
        public readonly state: IHocState = {
            count: Number(this.props.initCount) || 0
        };

        public render() {
            return <WrappedComponent {...this.props} count={this.state.count} onIncrement={this.handleIncrement} />
        }

        private handleIncrement = () => {
            this.setState({ count: this.state.count + 1 });
        };
    }
}

interface IErroInjectedProps {
    onReset: () => any;
};

export const withErrorBoundary = <WrappedProps extends IErroInjectedProps>(
    WrappedComponent: React.ComponentType<WrappedProps>
) => {
    type HocProps = Subtract<WrappedProps, IErroInjectedProps> & {

    };

    interface IHocState {
        readonly error: Error | null | undefined
    };

    // tslint:disable-next-line:max-classes-per-file
    return class WithErrorBoundary extends React.Component<HocProps, IHocState>{
        public static displayName = `WithErrorBoundary${WrappedComponent.displayName}`;
        public readonly state = {
            error: undefined
        };

        public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            this.setState({ ...this.state, error });
            // log error
        }
        public render() {
            const { children, ...restProps } = this.props as {
                children: React.ReactNode;
            };

            return this.state.error ? children : (
                <WrappedComponent {...restProps} onReset={this.handleReset} />
            )
        }

        private handleReset = () => this.setState({ error: undefined });
    }
}
