import { ISearchState, initialSearchState } from '../state/search.state';
import { Action } from '@ngrx/store';
import { ESearchActions, SetLocation } from '../actions/search.actions';
import { EForecastActions } from '../actions/forecast.actions';
import { ELocationsActions } from '../actions/locations.actions';

export function searchReducers(
    state: ISearchState = initialSearchState,
    action: Action
): ISearchState {
    switch (action.type) {
        case ESearchActions.SET_LOCATION: {
            return {
                ...state,
                location: (action as SetLocation).payload.location
            }
        }
        case ELocationsActions.LOCATIONS_SEARCH:
        case EForecastActions.GET_FORECAST: {
            return {
                ...state,
                loading: true
            }
        }
        case ELocationsActions.LOCATIONS_SEARCH_SUCCESS:
        case ELocationsActions.LOCATIONS_SEARCH_ERROR: 
        case EForecastActions.GET_FORECAST_SUCCESS:
        case EForecastActions.GET_FORECAST_ERROR: {
            return {
                ...state,
                loading: false,
            }
        }
        default: {
            return state;
        }
    }
}
