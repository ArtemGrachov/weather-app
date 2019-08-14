import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from '../models/location.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class LocationsService {
    constructor(private http: HttpClient) { }

    public locationsSearch(query: string): Observable<ILocation[]> {
        let params: HttpParams = new HttpParams();
        params = params.append('key', environment.apiKey);
        params = params.append('q', query);

        return this.http.get<ILocation[]>('https://api.apixu.com/v1/search.json', { params });
    }
}
