import { IAuthorModel, IBookSelection, ITurnProps } from 'src/types';
import charlesdickens from '../images/authors/charlesdickens.jpg';
import jkrowling from '../images/authors/jkrowling.jpg';
import josephconrad from '../images/authors/josephconrad.png';
import marktwain from '../images/authors/marktwain.jpg';
import stephenhawking from '../images/authors/stephenhawking.jpg';
import willamshakespeare from '../images/authors/willamshakespeare.jpg';

export const authors: ReadonlyArray<IAuthorModel> = [
  {
    authorImageURL: marktwain,
    books: ['The Adventures of Huckleberry Finn'],
    imageSource: "Wikimedia Commons",
    name: "Mark Twain",
  },
  {
    authorImageURL: josephconrad,
    books: ['Heart of Darkness'],
    imageSource: 'Wikimedia Commons',
    name: 'Joseph Conrad'
  },
  {
    authorImageURL: jkrowling,
    books: ['Harry Potter and the Sorcerers Stone'],
    imageAttribution: 'Daniel Ogren',
    imageSource: 'Wikimedia Commons',
    name: 'J.K. Rowling',
  },
  {
    authorImageURL: stephenhawking,
    books: ['The Shining', 'IT'],
    imageAttribution: 'Pinguino',
    imageSource: 'Wikimedia Commons',
    name: 'Stephen King',
  },
  {
    authorImageURL: charlesdickens,
    books: ['David Copperfield', 'A Tale of Two Cities'],
    imageSource: 'Wikimedia Commons',
    name: 'Charles Dickens',
  },
  {
    authorImageURL: willamshakespeare,
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet'],
    imageSource: 'Wikimedia Commons',
    name: 'William Shakespeare',
  }
];

export const initState: ITurnProps = {
  author: authors[0],
  bookSelections: authors[0].books.map<IBookSelection>(b => ({
    bookAuthor: authors[0].name,
    isCorrectAnswer: true,
    title: b
  })),
  isCorrect: false,
  isSelected: false
};