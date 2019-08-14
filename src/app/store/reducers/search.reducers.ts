import { ISearchState, initialSearchState } from '../state/search.state';
import { Action } from '@ngrx/store';
import { EAppActions } from '../actions/app.actions';
import { ESearchActions, SetLocation } from '../actions/search.actions';

export const searchReducers = (
    state: ISearchState = initialSearchState,
    action: Action
): ISearchState => {
    switch (action.type) {
        case ESearchActions.SET_LOCATION: {
            return {
                ...state,
                location: (action as SetLocation).payload.location
            }
        }
        case EAppActions.GET_FORECAST: {
            return {
                ...state,
                loading: true
            }
        }
        case EAppActions.GET_FORECAST_SUCCESS:
        case EAppActions.GET_FORECAST_ERROR: {
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
