import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { GetForecast } from 'src/app/store/actions/app.actions';

@Component({
    selector: 'app-root',
    templateUrl: 'root.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RootComponent {
    constructor(private store: Store<IAppState>) { }

    public requestForecast(location: string): void {
        this.store.dispatch(new GetForecast({ location }));
    }
}
