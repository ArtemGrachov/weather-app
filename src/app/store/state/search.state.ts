import { ILocation } from 'src/app/models/location.interface';

export interface ISearchState {
    loading: boolean;
    location: ILocation;
}

export const initialSearchState: ISearchState = {
    loading: false,
    location: null
}
