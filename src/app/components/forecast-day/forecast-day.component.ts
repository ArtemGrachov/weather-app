import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDay } from 'src/app/models/day.interface';

@Component({
    selector: 'app-forecast-day',
    templateUrl: 'forecast-day.component.html',
    styleUrls: ['forecast-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastDayComponent {
    @Input()
    public day: IDay;
}
