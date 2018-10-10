import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ITurnDataModel, { IBookSelection } from 'src/models/ITurnDataModel';
import AuthorQuiz from '../AuthorQuiz';

configure({ adapter: new Adapter() });

describe("Author Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        const data = {
            authorImageURL: "images/author/marktwain.jpg",
            books: ["The Adventures of Huckleberry Finn", "book2", "book3"],
            imageSource: "Wikimedia Commons",
            name: "Mark Twain",
        };
        const books: ReadonlyArray<IBookSelection> = [
            { title: "book1", isCorrectAnswer: true }, { title: "book2", isCorrectAnswer: false }
        ];

        const turnData: ITurnDataModel = {
            author: data,
            books
        };

        const next = () => {
            return turnData;
        }

        ReactDOM.render(<AuthorQuiz next={next}/>, div);
    });
});
