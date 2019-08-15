import { ILocationsState, initialLocationsState, adapter } from '../state/locations.state';
import { Action } from '@ngrx/store';
import { ELocationsActions, LocationsSearchSuccess, LocationRemove } from '../actions/locations.actions';

export function locationsReducers(
    state: ILocationsState = initialLocationsState,
    action: Action
): ILocationsState {
    switch (action.type) {
        case ELocationsActions.LOCATIONS_SEARCH_SUCCESS: {
            return adapter.upsertMany(
                (action as LocationsSearchSuccess).payload.locations,
                state
            );
        }
        case ELocationsActions.LOCATION_REMOVE: {
            return adapter.removeOne(
                (action as LocationRemove).payload.location.id,
                state
            );
        }
        default: {
            return state;
        }
    }
};
