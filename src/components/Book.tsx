import * as React from 'react';

const Book = ({ title, key, isCorrectAnswer, onClicked }:
    { title: string, key: string; isCorrectAnswer?: boolean, onClicked: () => void }) => (
        <h4 key={key}
            onClick={onClicked}
            className={isCorrectAnswer === undefined ? "answer" : (isCorrectAnswer ? "answer text-success" : "answer text-danger")}>
            {title}
        </h4>
    );

export default Book;