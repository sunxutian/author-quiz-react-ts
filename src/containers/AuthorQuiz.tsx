import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchNextTurn } from 'src/actions';
import { AuthorQuiz, IAuthorProps } from 'src/AuthorQuiz';
import { AppActions } from 'src/reducers/reducers_ext';
import { IAppState } from "src/types";

const mapStateToProps = (state: IAppState): IAuthorProps => ({
    error: state.fetchError,
    isFeching: state.isFetching,
    loadingProgress: state.fetchPercentage
});

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) =>
    bindActionCreators({
        requestInitData: fetchNextTurn.request
    }, dispatch);


export const ConnectedAuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(AuthorQuiz);