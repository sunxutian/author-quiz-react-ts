import * as React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Book from '../components/Book';
import { IBookSelection, ITurnProps } from '../types';

export type TurnProps =  ITurnProps & { onBookSelection: (author: string) => () => void };

export const Turn = ({ isSelected, isCorrect, author, onBookSelection, bookSelections }: TurnProps) => (
    <Row className="turn" style={{ backgroundColor: isSelected ? (isCorrect ? "green" : "red") : "white" }}>
        <Col md={4} sm={4} smOffset={1} mdOffset={1}>
            <Image src={author.authorImageURL} responsive={true}
                className="authorimage" alt="Author" thumbnail={true} />
        </Col>
        <Col md={6} sm={6}>
            {bookSelections.map(({ title, bookAuthor }: IBookSelection, index: number) =>
                <Book title={title} key={index.toString()} answered={isSelected} index={index}
                    isCorrectAnswer={isSelected ? bookAuthor === author.name : null}
                    onBookSelected={onBookSelection(bookAuthor)}
                />)}
        </Col>
    </Row>
)
