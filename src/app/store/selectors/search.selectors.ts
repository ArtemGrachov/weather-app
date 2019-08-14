import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISearchState } from '../state/search.state';
import { IAppState } from '../state/app.state';

export const selectSearch = createFeatureSelector<IAppState, ISearchState>('search');

export const selectLocation = createSelector(
    selectSearch,
    (state: ISearchState) => state.location
);

export const selectLoading = createSelector(
    selectSearch,
    (state: ISearchState) => state.loading
);
