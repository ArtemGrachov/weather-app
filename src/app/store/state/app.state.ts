import { IForecastState, initialForecastState } from './forecast.state';
import { ILocationsState, initialLocationsState } from './locations.state';
import { ISearchState, initialSearchState } from './search.state';

export interface IAppState {
    forecast: IForecastState;
    locations: ILocationsState;
    search: ISearchState;
}

export function getInitialState(): IAppState {
    return {
        forecast: initialForecastState,
        locations: initialLocationsState,
        search: initialSearchState
    }
}
