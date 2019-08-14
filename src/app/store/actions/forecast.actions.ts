import { Action } from '@ngrx/store';
import { IRes } from 'src/app/models/res.interface';
import { IError } from 'src/app/models/error.interface';

export enum EForecastActions {
    GET_FORECAST = '[Forecast] Get forecast',
    GET_FORECAST_SUCCESS = '[Forecast] Get forecast success',
    GET_FORECAST_ERROR = '[Forecast] Get forecast error'
}

export class GetForecast implements Action {
    public type: EForecastActions = EForecastActions.GET_FORECAST;

    constructor(public payload: { location: string }) { }
}

export class GetForecastSuccess implements Action {
    public type: EForecastActions = EForecastActions.GET_FORECAST_SUCCESS;

    constructor(public payload: IRes) { }
}

export class GetForecastError implements Action {
    public type: EForecastActions = EForecastActions.GET_FORECAST_ERROR;

    constructor(public payload: IError) { }
}

export type ForecastAction =
    GetForecast |
    GetForecastSuccess |
    GetForecastError;
