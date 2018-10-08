import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IHelloProps {
    now: string
}

function Hello(props: IHelloProps) {
    return <h1>{props.now}</h1>
}

configure({ adapter: new Adapter() });

const moment = new Date(2018, 1, 1);

describe("when testing directly", () => {
    let result: JSX.Element;
    beforeAll(() => {
        result = Hello({ now: moment.toLocaleString() });
    });

    it("return a value", () => {
        expect(result).not.toBeNull();
    });

    it("return a h1", () => {
        expect(result.type).toBe("h1");
    });

    it("has a child", () => {
        expect(result.props.children).toBeTruthy();
    });
})

describe("When testing with ReactDOM", () => {
    it("render without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toLocaleString()} />, div);
    });
});

describe("when testing with enzyme", () => {
    it("allow us to set props", () => {
        const wraper = shallow(<Hello now={moment.toLocaleString()} />);
        expect(wraper.find("h1")).toHaveLength(1);
        expect(wraper.contains(<h1>2018-2-1 00:00:00</h1>)).toBe(true);
        // expect(wraper.props().now).toBeTruthy();
        // wraper.setProps({now: '123'});
        // expect(wraper.props().now).toBe("123");
    });
});

