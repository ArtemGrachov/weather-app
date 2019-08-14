import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetForecast } from '../store/actions/app.actions';

@Component({
    selector: 'app-root',
    templateUrl: 'root.component.html'
})
export class RootComponent {
    constructor(private store: Store<IAppState>) { };

    public ngOnInit(): void {
        this.store.dispatch(new GetForecast({ location: 'new'}));
    }
}