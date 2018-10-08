import * as React from 'react';
import { IAuthorModel } from 'src/models/IAuthorModel';


export const Turn = (author: IAuthorModel) => (
    <div className="row turn" style={{ backgroundColor: "white" }}>
        <div className="col-8 offsite-1">
            <img src={author.authorImageURL}
                className="authorimage" alt="Author" width={200} height={250}/>
        </div>
        <br />
        <div className="col-6">
            {author.books.map((title: string) => <p key={title}>{title}</p>)}
        </div>
    </div>
); 