import * as React from 'react';

const Book = ({ title, isCorrectAnswer, onClicked, answered }:
    { title: string, isCorrectAnswer: boolean | null, onClicked: () => void, answered: boolean }) => (
        <h4 onClick={onClicked} id={`book_${title}`}
            className={isCorrectAnswer === null ? "answer" : (isCorrectAnswer ? "answer text-success" : "answer text-danger")}
            style={{cursor: answered ? "not-allowed" : "pointer"}}>
            {title}
        </h4>
    );

export default Book;