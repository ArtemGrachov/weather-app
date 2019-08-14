import { IForecastState, initialForecastState } from './forecast.state';
import { ILocationsState, initialLocationsState } from './locations.state';

export interface IAppState {
    forecast: IForecastState;
    locations: ILocationsState;
}

export function getInitialState(): IAppState {
    return {
        forecast: initialForecastState,
        locations: initialLocationsState
    }
}

