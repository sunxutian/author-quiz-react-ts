import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Book from 'src/components/Book';
import ITurnDataModel, { IBookSelection } from 'src/models/ITurnDataModel';

export class Turn extends React.Component<ITurnDataModel, { answered: boolean }>{
    constructor(props: ITurnDataModel, state: { answered: boolean }) {
        super(props, state);
        this.state = {
            answered: false
        };
    }

    public componentWillReceiveProps() {
        this.setState({
            answered: false
        });
    }

    public render() {
        return (
            <Row className="turn" style={{ backgroundColor: "white" }}>
                <Col md={4} sm={4} smOffset={1} mdOffset={1}>
                    <Image src={this.props.author.authorImageURL} responsive={true}
                        className="authorimage" alt="Author" thumbnail={true} />
                </Col>
                <Col md={6} sm={6}>
                    {this.props.books.map(({ title, isCorrectAnswer }: IBookSelection, index: number) =>
                        <Book title={title} key={index.toString()}
                            isCorrectAnswer={this.state.answered ? isCorrectAnswer : undefined}
                            onClicked={this.onAnswerClick(isCorrectAnswer)}
                        />)}
                </Col>
            </Row>
        )
    }

    private onAnswerClick = (isCorrectAnswer: boolean) => () => {
        this.setState({
            answered: true
        });
    }
}
