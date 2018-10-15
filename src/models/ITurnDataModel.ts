import { IAuthorModel } from './IAuthorModel';

export default interface ITurnDataModel {
    author: IAuthorModel,
    books: ReadonlyArray<IBookSelection>
}

export interface IBookSelection {
    bookAuthor: string;
    title: string;
}