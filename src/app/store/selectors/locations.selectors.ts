import { createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ILocationsState, adapter } from '../state/locations.state';

export const selectLocations = createFeatureSelector<IAppState, ILocationsState>('locations');

const { selectAll } = adapter.getSelectors(selectLocations);

export const selectAllLocations = selectAll;