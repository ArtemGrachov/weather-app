import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ForecastService } from 'src/app/services/forecast.service';
import {
    EAppActions,
    GetForecast,
    GetForecastSuccess,
    GetForecastError
} from '../actions/app.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IRes } from 'src/app/models/res.interface';
import { of } from 'rxjs';
import { IError } from 'src/app/models/error.interface';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private forecastService: ForecastService
    ) { };

    @Effect()
    public getForecast$ = this.actions$.pipe(
        ofType(EAppActions.GET_FORECAST),
        switchMap(
            (action: GetForecast) =>
                this.forecastService.getForecast(action.payload.location)
                    .pipe(
                        map((res: IRes) => new GetForecastSuccess(res)),
                        catchError((errorRes: { error: IError }) => of(new GetForecastError(errorRes.error)))
                    )
        )
    )
}
