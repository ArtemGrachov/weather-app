import { EntityState, EntityAdapter, createEntityAdapter }  from '@ngrx/entity';
import { IDay } from 'src/app/models/day.interface';

export interface IForecastState extends EntityState<IDay> { }

export const adapter: EntityAdapter<IDay> = createEntityAdapter<IDay>({
    selectId: (day: IDay) => day.id,
    sortComparer: false
});

export const initialForecastState: IForecastState = adapter.getInitialState();
