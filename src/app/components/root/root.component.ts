import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { SetLocation } from 'src/app/store/actions/search.actions';
import { Observable } from 'rxjs';
import { IDay } from 'src/app/models/day.interface';
import { selectSearch, selectLocation } from 'src/app/store/selectors/search.selectors';
import { switchMap } from 'rxjs/operators';
import { selectByLocation } from 'src/app/store/selectors/forecast.selectors';

@Component({
    selector: 'app-root',
    templateUrl: 'root.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent {
    constructor(private store: Store<IAppState>) { }

    public requestForecast(location: string): void {
        this.store.dispatch(new SetLocation({ location }));
    }

    public forecast$: Observable<IDay[]> = this.store.select(selectLocation)
        .pipe(
            switchMap((location: string) => this.store.select(selectByLocation, { location }))
        )
}
