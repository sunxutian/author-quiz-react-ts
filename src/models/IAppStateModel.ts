import ITurnDataModel from './ITurnDataModel';

export default interface IAppStateModel {
    next: () => ITurnDataModel
}