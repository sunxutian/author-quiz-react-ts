import { createStandardAction } from 'typesafe-actions';
import * as constants from '../constants';

// export const selectBook = (bookAuthor: string) => action(constants.SELECT_BOOK, bookAuthor);
// export const continueNext = () => action(constants.CONTINUTE_NEXT);

export const selectBook = createStandardAction(constants.SELECT_BOOK)<string>();
export const continueNext = createStandardAction(constants.CONTINUTE_NEXT)<void>();