export interface IAuthorModel {
    readonly authorImageURL: any;
    readonly books: ReadonlyArray<string>;
    readonly name: string;
    readonly imageSource: string;
    readonly imageAttribution?: string;
}

export interface ITurnProps {
    readonly author: IAuthorModel,
    readonly bookSelections: ReadonlyArray<IBookSelection>,
    readonly isSelected: boolean,
    readonly isCorrect: boolean,
}

export interface IBookSelection {
    readonly bookAuthor: string;
    readonly title: string;
    readonly isCorrectAnswer: boolean;
}

export interface IAppState {
    readonly turnData: ITurnProps;
    readonly isFetching: boolean;
    readonly fetchError?: Error | null;
    readonly fetchPercentage: number;
}