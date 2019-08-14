import { IDay } from '../models/day.interface';
import { IForecastLocation } from '../models/forecast-location.interface';

export default function(day: IDay, location: IForecastLocation): IDay {
    day.lat = location.lat;
    day.lon = location.lon;
    day.id = `${day.date}_${day.lat}_${day.lon}`;
    return day;
}