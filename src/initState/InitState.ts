import { sample, shuffle } from 'lodash';
import { IAuthorModel } from 'src/models/IAuthorModel';
import ITurnDataModel from 'src/models/ITurnDataModel';
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

const allBooks: ReadonlyArray<string> = authors.map(a => a.books).reduce((p, c) => {
  return p.concat(c);
}, []);

const getAuthorFromBookName = (title: string | undefined) => {
  const author = authors.find((a) => a.books.some(b => b === title));
  if (author) {
    return author;
  }
  throw new Error("author not matches");
}

export function getTurnData(): ITurnDataModel {
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  const author = getAuthorFromBookName(answer);
  if (author) {
    return {
      author,
      books: fourRandomBooks.map(b => ({
        isCorrectAnswer: getAuthorFromBookName(b).name === author.name,
        title: b,
      })),
    };
  }

  throw new Error();
}