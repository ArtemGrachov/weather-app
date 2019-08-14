import { adapter, IForecastState } from '../state/forecast.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IDay } from 'src/app/models/day.interface';
import { IAppState } from '../state/app.state';

export const selectForecast = createFeatureSelector<IAppState, IForecastState>('forecast');

const { selectAll } = adapter.getSelectors(selectForecast);

export const selectByLocation = createSelector(
    selectAll,
    (days: IDay[], props: { location: string }) => days.filter(
        (day: IDay) => day.location_id === props.location
    )
);
