import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Turn } from 'src/components/Turn';
import { selectBook } from '../actions';
import { AppActions } from '../reducers/reducers_ext';
import { IAppState } from '../types';

function mapStateToProps({ turnData }: IAppState) {
    return turnData;
}

// function mapDispatchToProps(dispatch: Dispatch<AppActions>) {
//     return bindActionCreators({
//         onBookSelection: (author: string) => () => selectBook(author)
//     }, dispatch)
// };

function mapDispatchToPropsExt(dispatch: Dispatch<AppActions>) {
    return {
        onBookSelection: (author: string) => () => dispatch(selectBook(author))
    }
};



export default connect(mapStateToProps, mapDispatchToPropsExt)(Turn);
