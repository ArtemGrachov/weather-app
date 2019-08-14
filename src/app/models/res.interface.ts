import { ICurrent } from './current.interface';
import { IForecast } from './forecast.interface';
import { IForecastLocation } from './forecast-location.interface';

export interface IRes {
    alert: {};
    current: ICurrent;
    forecast: IForecast;
    location: IForecastLocation;
}