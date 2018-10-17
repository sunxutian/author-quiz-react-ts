import { IAuthorService } from './authorService';
import { ILoadCounterService } from './loadCountService';

export interface IDependencyServices {
    authorService: IAuthorService,
    loadingCounterService: ILoadCounterService
}