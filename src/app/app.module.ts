import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
    MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, DocumentRef, MapServiceFactory,
    BingMapAPILoaderConfig, BingMapAPILoader,
    GoogleMapAPILoader, GoogleMapAPILoaderConfig
} from 'angular-maps';
import { DataService } from './address_service';
import { HttpModule } from '@angular/http';

export function MapServiceProviderFactory() {
    let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
    bc.apiKey = "AvBJOqM5TW1BNY-cPJQyTU9GL99cra2jFwXQqR5brPf9mjaYMQSJ6xGD7hASgiBe"; // your bing map key
    bc.branch = "experimental";
    // to use the experimental bing brach. There are some bug fixes for
    // clustering in that branch you will need if you want to use 
    // clustering.
    return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

@NgModule({
    imports: [BrowserModule, FormsModule, MapModule.forRoot(), HttpModule],
    providers: [
        {
            provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
        }, DataService
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
