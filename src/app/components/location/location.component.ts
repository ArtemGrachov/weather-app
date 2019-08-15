import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ILocation } from 'src/app/models/location.interface';

@Component({
    selector: 'app-location',
    templateUrl: 'location.component.html',
    styleUrls: ['location.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent {
    @Input()
    public location: ILocation;

    public locationName: string;

    public ngOnChanges(): void {
        const index = this.location.name.indexOf(',');

        if (index != -1) {
            this.locationName = this.location.name.slice(0, index);
        } else {
            this.locationName = this.location.name;
        }
    }
}