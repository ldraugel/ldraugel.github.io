import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { BingLocationResponse } from './bing_location_response';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class DataService {
    private url = 'https://s21achusvcev01blkbapp01.sky.blackbaud.com/v1/';

    public headers: Headers;
    private requestOptions: any;
    // private bingMapsKey = 'AvBJOqM5TW1BNY-cPJQyTU9GL99cra2jFwXQqR5brPf9mjaYMQSJ6xGD7hASgiBe';
    private bingMapsKey = 'Av9NjnrAYydrGSUsGyzroX6cTULvo0HDs06JUiO3BOa9I1evHdVL54FwrbUNcFKS'; // taken from skyux-libs-event-components

    constructor(
        private bingHttp: Http
    ) {
    }

    public getLocation(address: string): Observable<BingLocationResponse> {
        let bingLocationResponse: BingLocationResponse;
        let bingUrlUS = `https://dev.virtualearth.net/REST/v1/Locations/US/${address}?output=json&maxRes=20&key=${this.bingMapsKey}`;
        let res = this.bingHttp.get(bingUrlUS, this.requestOptions).pipe(
            map((data: any) => {
                bingLocationResponse = data.json();
                return bingLocationResponse;
            }));
        return res;
    }
}
