import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { forecastReducers } from './forecast.reducers';
import { locationsReducers } from './locations.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
    forecast: forecastReducers,
    locations: locationsReducers
};
