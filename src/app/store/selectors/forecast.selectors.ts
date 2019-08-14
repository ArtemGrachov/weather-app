import { adapter, IForecastState } from '../state/forecast.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IDay } from 'src/app/models/day.interface';
import { IAppState } from '../state/app.state';
import { ILocation } from 'src/app/models/location.interface';

export const selectForecast = createFeatureSelector<IAppState, IForecastState>('forecast');

const { selectAll } = adapter.getSelectors(selectForecast);

export const selectByLocation = createSelector(
    selectAll,
    (days: IDay[], props: { location: ILocation }) => days.filter(
        (day: IDay) => {
            return day.lat === props.location.lat &&
                day.lon === props.location.lon;
        }
    )
);
