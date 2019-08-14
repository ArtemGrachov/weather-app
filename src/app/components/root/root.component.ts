import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { SetLocation } from 'src/app/store/actions/search.actions';
import { Observable } from 'rxjs';
import { IDay } from 'src/app/models/day.interface';
import { selectLocation } from 'src/app/store/selectors/search.selectors';
import { switchMap, tap } from 'rxjs/operators';
import { selectByLocation } from 'src/app/store/selectors/forecast.selectors';
import { LocationsSearch } from 'src/app/store/actions/locations.actions';
import { selectAllLocations } from 'src/app/store/selectors/locations.selectors';
import { ILocation } from 'src/app/models/location.interface';

@Component({
    selector: 'app-root',
    templateUrl: 'root.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent {
    constructor(private store: Store<IAppState>) { }

    public searchLocations(query: string): void {
        this.store.dispatch(new LocationsSearch({ query }));
    }

    public setLocation(location: ILocation): void {
        this.store.dispatch(new SetLocation({ location }));
    }

    public forecast$: Observable<IDay[]> = this.store.select(selectLocation)
        .pipe(
            tap(r => console.log(r)),
            switchMap((location: ILocation) => this.store.select(selectByLocation, { location })),
            tap(r => console.log(r))
        )

    public locations$: Observable<ILocation[]> = this.store.select(selectAllLocations);
}
