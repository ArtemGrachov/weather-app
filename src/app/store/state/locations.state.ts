import { EntityState, EntityAdapter, createEntityAdapter }  from '@ngrx/entity';
import { ILocation } from 'src/app/models/location.interface';

export interface ILocationsState extends EntityState<ILocation> { }

export const adapter: EntityAdapter<ILocation> = createEntityAdapter<ILocation>({
    selectId: (location: ILocation) => location.name,
    sortComparer: false
});

export const initialLocationsState: ILocationsState = adapter.getInitialState();
