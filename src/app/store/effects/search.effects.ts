import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { ESearchActions, SetLocation } from '../actions/search.actions';
import { switchMap, filter, mapTo, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { selectByLocation } from '../selectors/forecast.selectors';
import { IDay } from 'src/app/models/day.interface';
import { GetForecast } from '../actions/forecast.actions';

@Injectable()
export class SearchEffects {
    constructor(
        private store: Store<IAppState>,
        private actions$: Actions
    ) { };

    @Effect()
    public setLocation$ = this.actions$.pipe(
        ofType(ESearchActions.SET_LOCATION),
        switchMap(
            (action: SetLocation) => this.store.select(selectByLocation, action.payload)
                .pipe(
                    take(1),
                    filter((forecast: IDay[]) => forecast.length === 0),
                    mapTo(new GetForecast({ location: action.payload.location.name }))
                )
        ),
    )
}