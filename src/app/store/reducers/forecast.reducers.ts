import { IForecastState, initialForecastState, adapter } from '../state/forecast.state';
import { AppAction, EAppActions, GetForecastSuccess } from '../actions/app.actions';
import { IRes } from 'src/app/models/res.interface';
import dayLocation from 'src/app/utils/day-location';
import { IDay } from 'src/app/models/day.interface';

export const forecastReducers = (
    state: IForecastState = initialForecastState,
    action: AppAction
) => {
    switch (action.type) {
        case EAppActions.GET_FORECAST_SUCCESS: {
            const payload: IRes = (action as GetForecastSuccess).payload;
            payload.forecast.forecastday = payload.forecast.forecastday.map(
                (day: IDay) => dayLocation(day, payload.location)
            );
            return adapter.upsertMany(payload.forecast.forecastday, state);
        }
        default: {
            return state;
        }
    }
};
