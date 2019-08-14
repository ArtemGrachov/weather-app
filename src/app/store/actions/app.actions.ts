import { Action } from '@ngrx/store';
import { IRes } from 'src/app/models/res.interface';
import { IError } from 'src/app/models/error.interface';

export enum EAppActions {
    GET_FORECAST = '[App] Get forecast',
    GET_FORECAST_SUCCESS = '[App] Get forecast success',
    GET_FORECAST_ERROR = '[App] Get forecast error'
}

export class GetForecast implements Action {
    public type: EAppActions = EAppActions.GET_FORECAST;

    constructor(public payload: { location: string }) { }
}

export class GetForecastSuccess implements Action {
    public type: EAppActions = EAppActions.GET_FORECAST_SUCCESS;

    constructor(public payload: IRes) { }
}

export class GetForecastError implements Action {
    public type: EAppActions = EAppActions.GET_FORECAST_ERROR;

    constructor(public payload: IError) { }
}

export type AppAction =
    GetForecast |
    GetForecastSuccess |
    GetForecastError;
