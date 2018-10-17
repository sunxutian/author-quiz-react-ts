import { ITurnProps } from 'src/types';
import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import * as constants from '../constants';

export const continueNext = createStandardAction(constants.CONTINUTE_NEXT)<ITurnProps>();

export const selectBook = createStandardAction(constants.SELECT_BOOK)<string>();
export const fetchNextTurn = createAsyncAction(
    constants.FETCH_NEXT_REQUEST,
    constants.FETCH_NEXT_SUCCESSS,
    constants.FETCH_NEXT_FAILURE
)<void, ITurnProps, Error>();

export const fetchPercentageReport = createStandardAction(constants.FETCH_PERCENTAGE_REPORT)<number>();