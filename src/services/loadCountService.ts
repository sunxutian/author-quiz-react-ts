import { interval, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export interface ILoadCounterService {
    loaingCounter: Observable<number>;
    initLoadingCounter(): void;
    disposeLoadingCounter(): void;
}

export class LoadCounterService implements ILoadCounterService {
    public loaingCounter: Observable<number>;
    private stop: boolean;
    public initLoadingCounter(): void {
        this.stop = false;
        this.loaingCounter = interval(450).pipe(map(n => n * 20),takeWhile((n, i) => this.stop !== true));
    }
    public disposeLoadingCounter(): void {
        this.stop = true;
    }
}