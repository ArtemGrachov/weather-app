import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ForecastService } from 'src/app/services/forecast.service';
import {
    EForecastActions,
    GetForecast,
    GetForecastSuccess,
    GetForecastError
} from '../actions/forecast.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IRes } from 'src/app/models/res.interface';
import { of } from 'rxjs';
import { IError } from 'src/app/models/error.interface';

@Injectable()
export class ForecastEffects {
    constructor(
        private actions$: Actions,
        private forecastService: ForecastService
    ) { };

    @Effect()
    public getForecast$ = this.actions$.pipe(
        ofType(EForecastActions.GET_FORECAST),
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
