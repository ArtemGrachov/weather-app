import { IAstro } from './astro.interface';
import { IWeather } from './weather.interface';

export interface IDay {
    astro: IAstro;
    date: string;
    date_epoch: number;
    day: IWeather;
    lat?: number;
    lon?: number;
    id?: string;
}