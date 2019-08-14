import { AppAction, EAppActions, GetForecastSuccess } from '../actions/app.actions';
import { IRes } from 'src/app/models/res.interface';
import { ILocationsState, initialLocationsState, adapter } from '../state/locations.state';

export const locationsReducers = (
    state: ILocationsState = initialLocationsState,
    action: AppAction
) => {
    switch (action.type) {
        case EAppActions.GET_FORECAST_SUCCESS: {
            const payload: IRes = (action as GetForecastSuccess).payload;
            return adapter.upsertOne(payload.location, state);
        }
        default: {
            return state;
        }
    }
};
