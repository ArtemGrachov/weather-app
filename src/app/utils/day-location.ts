import { IDay } from '../models/day.interface';
import { ILocation } from '../models/location.interface';

export default function(day: IDay, location: ILocation): IDay {
    day.location_id = location.name;
    day.id = `${day.date}_${day.location_id}`;
    return day;
}