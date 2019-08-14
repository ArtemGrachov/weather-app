import { Action } from '@ngrx/store';
import { ILocation } from 'src/app/models/location.interface';

export enum ESearchActions {
    SET_LOCATION = '[Search] Set location',
}

export class SetLocation implements Action {
    public type: ESearchActions = ESearchActions.SET_LOCATION;

    constructor(public payload: { location: ILocation }) { }
}

export type SearchAction = SetLocation;