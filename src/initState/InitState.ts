import { IAuthorModel } from 'src/models/IAuthorModel';
import marktwain from '../images/authors/marktwain.jpg'

export const authors: ReadonlyArray<IAuthorModel> = [
    {
      authorImageURL: marktwain,
      books: ["The Adventures of Huckleberry Finn", "book2", "book3"],
      imageSource: "Wikimedia Commons",
      name: "Mark Twain",
    }
  ];
  