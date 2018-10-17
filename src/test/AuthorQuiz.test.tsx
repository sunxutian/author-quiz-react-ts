import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedAuthorQuiz } from 'src/containers/AuthorQuiz';
// import { AuthorQuiz } from '../AuthorQuiz';
// import { Turn } from '../components/Turn';
// import { IAuthorModel, IBookSelection, ITurnProps } from '../types'


configure({ adapter: new Adapter() });

describe("Author Quiz", () => {
    // let data: IAuthorModel;
    // let bookSelections: ReadonlyArray<IBookSelection>;
    // let turnData: ITurnProps;

    // data = {
    //     authorImageURL: "images/author/marktwain.jpg",
    //     books: ["The Adventures of Huckleberry Finn", "book2", "book3"],
    //     imageSource: "Wikimedia Commons",
    //     name: "Mark Twain",
    // };
    // bookSelections = [
    //     { title: "1", bookAuthor: "Alex", isCorrectAnswer: false },
    //     { title: "2", bookAuthor: "Bob", isCorrectAnswer: false },
    //     { title: "3", bookAuthor: "Mark Twain", isCorrectAnswer: true }
    // ];

    // turnData = {
    //     author: data,
    //     bookSelections,
    //     isCorrect: false,
    //     isSelected: false
    // };

    // const next = () => {
    //     return turnData;
    // }

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<ConnectedAuthorQuiz />, div);
    });

    describe("When no answer has been selected", () => {
        let wrapper = mount(<ConnectedAuthorQuiz />);
        beforeAll(() => {
            wrapper = mount(<ConnectedAuthorQuiz />);
        });

        it("should have no background color", () => {
            const style = wrapper.find("div.row.turn").props().style;
            expect(style).toBeTruthy();
            if (style) {
                expect(style.backgroundColor).toBe("white");
            }
        });

        // it("should by default not answered", () => {
        //     const wrapper2 = shallow(<Turn {...turnData,} />);
        //     expect(wrapper2.state("answered")).toBeFalsy();
        //     expect(wrapper2.state("answeredCorrectly")).toBeFalsy();
        // });

        // it("should be answered by click", () => {
        //     const wrapper2 = mount(<Turn {...turnData} />);
        //     const book = wrapper2.find("#book_2");
        //     expect(book.props().id).toBe("book_2");
        //     expect(book.text()).toBe("3");

        //     book.simulate("click");
        //     expect(wrapper2.state("answered")).toBeTruthy();
        //     expect(wrapper2.state("answeredCorrectly")).toBeTruthy();
        //     // const allRows = wrapper2.find(".row.turn");
        //     // tslint:disable-next-line:no-console
        //     // allRows.map(a => console.log(a.props().style.backgroundColor));
        // });
    });
});
