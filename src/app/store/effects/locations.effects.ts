import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ELocationsActions, LocationsSearch, LocationsSearchSuccess, LocationsSearchError } from '../actions/locations.actions';
import { ILocation } from 'src/app/models/location.interface';
import { IError } from 'src/app/models/error.interface';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LocationsService } from 'src/app/services/locations.service';

@Injectable()
export class LocationsEffects {
    constructor(
        private actions$: Actions,
        private locationsService: LocationsService
    ) { }
    
        @Effect()
        public searchLocations$ = this.actions$.pipe(
            ofType(ELocationsActions.LOCATIONS_SEARCH),
            switchMap(
                (action: LocationsSearch) => this.locationsService.locationsSearch(action.payload.query)
                    .pipe(
                        map((locations: ILocation[]) => new LocationsSearchSuccess({ locations })),
                        catchError((errorRes: { error: IError }) => of(new LocationsSearchError(errorRes.error)))
                    )
            )
        )
}