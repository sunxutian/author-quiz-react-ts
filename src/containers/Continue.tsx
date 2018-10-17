import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppActions } from 'src/reducers/reducers_ext';
import { IAppState } from 'src/types';
import { continueNext } from '../actions';
import { Continue } from '../components/Continue';

const mapStateToProps = (state: IAppState, ownProps: React.ReactNode) => ownProps;

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => bindActionCreators({
    next: continueNext
}, dispatch);

export const ConnectedContinue = connect(mapStateToProps, mapDispatchToProps)(Continue);