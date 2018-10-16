import { Dispatch } from 'redux';
import {selectBookAction, continueNextAction} from '../actions';
import { Turn } from '../components/Turn';
import { IAppState } from '../types';

export function mapStateToProps({ turnData }: IAppState) {
    return turnData;
}

export function mapDispatchToProps(dispatch: Dispatch<>){
    
}
