import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDay } from 'src/app/models/day.interface';
import * as moment from 'moment';

@Component({
    selector: 'app-forecast-day',
    templateUrl: 'forecast-day.component.html',
    styleUrls: ['forecast-day.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastDayComponent {
    @Input()
    public day: IDay;

    public ngOnChanges(): void {
        const mDate = moment(this.day.date);

        this.formattedDate = mDate.format('MMMM Do YYYY');
        this.dayOfWeek = mDate.format('dddd');
    }

    public formattedDate: string = '';

    public dayOfWeek: string = '';
}
