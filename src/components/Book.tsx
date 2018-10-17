import * as React from 'react';

interface IProps {
    title: string;
    isCorrectAnswer: boolean | null;
    answered: boolean;
    index: number;
    onBookSelected: () => void;   
}

const Book : React.SFC<IProps> = ({ title, isCorrectAnswer, onBookSelected, answered, index }) => (
        <h4 onClick={onBookSelected} id={`book_${index}`}
            className={isCorrectAnswer === null ? "answer" : (isCorrectAnswer ? "answer text-success" : "answer text-danger")}
            style={{ cursor: answered ? "not-allowed" : "pointer" }}>
            {title}
        </h4>
    );

export default Book;