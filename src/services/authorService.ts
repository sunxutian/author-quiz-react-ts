import { sample, shuffle } from 'lodash';
import { authors } from 'src/initState/InitState';
import { IAuthorModel, ITurnProps } from 'src/types';

export interface IAuthorService {
    getAllAuthors(): Promise<ReadonlyArray<IAuthorModel>>;
    getNextTurnData(): Promise<ITurnProps>;
}

abstract class AbstractAuthorService implements IAuthorService {
    private allBooks: ReadonlyArray<string> = this.allAutors.map(a => a.books).reduce((p, c) => {
        return p.concat(c);
    }, []);

    constructor(protected allAutors: ReadonlyArray<IAuthorModel>) {

    }

    public abstract getAllAuthors(): Promise<ReadonlyArray<IAuthorModel>>;

    public abstract getNextTurnData(): Promise<ITurnProps>;

    protected getTurnData(): ITurnProps {
        const fourRandomBooks = shuffle(this.allBooks).slice(0, 4);
        const answer = sample(fourRandomBooks);
        const author = this.getAuthorFromBookName(answer);
        if (author) {
            return {
                author,
                bookSelections: fourRandomBooks.map(b => ({
                    bookAuthor: this.getAuthorFromBookName(b).name,
                    isCorrectAnswer: false,
                    title: b
                })),
                isCorrect: false,
                isSelected: false,
            };
        }

        throw new Error();
    }

    private getAuthorFromBookName = (title: string | undefined) => {
        const author = this.allAutors.find((a) => a.books.some(b => b === title));
        if (author) {
            return author;
        }
        throw new Error("author not matches");
    }
}

// tslint:disable-next-line:max-classes-per-file
export class LocalAuthorService extends AbstractAuthorService {
    constructor() {
        super(authors);
    }

    public getAllAuthors(): Promise<ReadonlyArray<IAuthorModel>> {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve(authors);
            }, 3000);
        });
    };

    public getNextTurnData(): Promise<ITurnProps> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(this.getTurnData());
            }, 3000);
        });
    }
}


