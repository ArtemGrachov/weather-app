import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRes } from '../models/res.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class ForecastService {
    constructor(private http: HttpClient) {}

    public getForecast(query: string): Observable<IRes> {
        let params: HttpParams = new HttpParams();
        params = params.append('key', environment.apiKey);
        params = params.append('q', query);

        return this.http.get<IRes>(`https://api.apixu.com/v1/forecast.json`, { params });
    }
}