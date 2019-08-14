import { ILocationsState, initialLocationsState, adapter } from '../state/locations.state';
import { Action } from '@ngrx/store';
import { ELocationsActions, LocationsSearchSuccess } from '../actions/locations.actions';

export const locationsReducers = (
    state: ILocationsState = initialLocationsState,
    action: Action
) => {
    switch (action.type) {
        case ELocationsActions.LOCATIONS_SEARCH_SUCCESS: {
            return adapter.upsertMany(
                (action as LocationsSearchSuccess).payload.locations,
                state
            );
        }
        default: {
            return state;
        }
    }
};
