import { IAuthorModel } from './IAuthorModel';

export default interface ITurnDataModel {
    author: IAuthorModel,
    books: ReadonlyArray<IBookSelection>
}

export interface IBookSelection {
    title: string;
    isCorrectAnswer: boolean;
}