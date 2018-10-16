import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Book from '../components/Book';
import { IBookSelection, ITurnDataModel } from '../types';

export class Turn extends React.Component<ITurnDataModel, { answered: boolean, answeredCorrectly: boolean }>{
    constructor(props: ITurnDataModel, state: { answered: boolean }) {
        super(props, state);
        this.state = {
            answered: false,
            answeredCorrectly: false
        };

        this.getBgColor = this.getBgColor.bind(this);
    }

    public componentWillReceiveProps() {
        this.setState({
            answered: false
        });
    }

    public render() {
        return (
            <Row className="turn" style={{ backgroundColor: this.getBgColor(this.state.answered, this.state.answeredCorrectly) }}>
                <Col md={4} sm={4} smOffset={1} mdOffset={1}>
                    <Image src={this.props.author.authorImageURL} responsive={true}
                        className="authorimage" alt="Author" thumbnail={true} />
                </Col>
                <Col md={6} sm={6}>
                    {this.props.books.map(({ title, bookAuthor }: IBookSelection, index: number) =>
                        <Book title={title} key={index.toString()} answered={this.state.answered} index={index}
                            isCorrectAnswer={this.state.answered ? bookAuthor === this.props.author.name : null}
                            onClicked={this.onAnswerClick(bookAuthor)}
                        />)}
                </Col>
            </Row>
        )
    }

    private onAnswerClick = (bookAuthor: string) => () => {
        if (!this.state.answered) {
            this.setState({
                answered: true,
                answeredCorrectly: bookAuthor === this.props.author.name
            });
        }
    }

    private getBgColor(answered: boolean, isCorrectAnswer: boolean) {
        return answered ? (isCorrectAnswer ? "green" : "red") : "white";
    }
}
