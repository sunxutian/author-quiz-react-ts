import * as React from 'react';

interface IProps {
    title: string;
    isCorrectAnswer: boolean | null;
    answered: boolean;
    index: number;
    onClicked: () => void;   
}

const Book = ({ title, isCorrectAnswer, onClicked, answered, index }: IProps) => (
        <h4 onClick={onClicked} id={`book_${index}`}
            className={isCorrectAnswer === null ? "answer" : (isCorrectAnswer ? "answer text-success" : "answer text-danger")}
            style={{ cursor: answered ? "not-allowed" : "pointer" }}>
            {title}
        </h4>
    );

export default Book;