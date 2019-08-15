import { Action } from '@ngrx/store';
import { ILocation } from 'src/app/models/location.interface';
import { IError } from 'src/app/models/error.interface';

export enum ELocationsActions {
    LOCATIONS_SEARCH = '[Locations] Search locations',
    LOCATIONS_SEARCH_SUCCESS = '[Locations] Search locations success',
    LOCATIONS_SEARCH_ERROR = '[Locations] Search locations error',
    LOCATION_REMOVE = '[Locations] Remove location'
}

export class LocationsSearch implements Action {
    public type: ELocationsActions = ELocationsActions.LOCATIONS_SEARCH;

    constructor(public payload: { query: string }) { }
}

export class LocationsSearchSuccess implements Action {
    public type: ELocationsActions = ELocationsActions.LOCATIONS_SEARCH_SUCCESS;

    constructor(public payload: { locations: ILocation[] }) { }
}

export class LocationsSearchError implements Action {
    public type: ELocationsActions = ELocationsActions.LOCATIONS_SEARCH_ERROR;

    constructor(public payload: IError) { }
}

export class LocationRemove implements Action {
    public type: ELocationsActions = ELocationsActions.LOCATION_REMOVE;

    constructor(public payload: { location: ILocation }) { }
}

export type LocationsAction =
    LocationsSearch |
    LocationsSearchSuccess |
    LocationsSearchError |
    LocationRemove;
