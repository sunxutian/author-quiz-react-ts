import * as React from 'react';
import 'react-dom';

function asyncComponent<TProps extends {}>
    (dynamicImportComponent: () => Promise<{ default: React.ComponentType<TProps> }>) {
    class AsyncComponent extends React.Component<TProps, { component: React.ComponentType<TProps> | null }>{
        constructor(props: TProps) {
            super(props);
            this.state = {
                component: null
            };
        }

        public async componentDidMount() {
            const { default: component } = await dynamicImportComponent();
            this.setState({
                component
            });
        }

        public render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
};


export default asyncComponent;