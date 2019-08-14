import { ICurrent } from './current.interface';
import { IForecast } from './forecast.interface';
import { ILocation } from './location.interface';

export interface IRes {
    alert: {};
    current: ICurrent;
    forecast: IForecast;
    location: ILocation;
}