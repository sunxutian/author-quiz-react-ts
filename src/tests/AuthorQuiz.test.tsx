import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
        }

        ReactDOM.render(<AuthorQuiz turnData={data} />, div);
    });
});
