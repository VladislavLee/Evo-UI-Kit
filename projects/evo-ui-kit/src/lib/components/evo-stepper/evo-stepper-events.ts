import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export enum EvoStepperEvent {
    LABEL_CHANGED = 'LABEL_CHANGED'
}

@Injectable()
export class EvoStepperEvents {

    private events$ = new Subject<EvoStepperEvent>();

    constructor() { }

    getEvents(type: EvoStepperEvent): Observable<any> {
        return this.events$.pipe(
            filter(event => event === type)
        );
    }

    emit(type: EvoStepperEvent) {
        this.events$.next(type);
    }

}
