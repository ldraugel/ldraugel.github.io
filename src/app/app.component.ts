import { Component } from '@angular/core';
import {
  MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, DocumentRef, MapServiceFactory,
  BingMapAPILoaderConfig, BingMapAPILoader,
  GoogleMapAPILoader, GoogleMapAPILoaderConfig, ILatLong
} from 'angular-maps';
import { AddressMarker } from './address_marker';
import { DataService } from './address_service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1,
    zoom: 6
  };

  _box: IBox = {
    maxLatitude: 33,
    maxLongitude: -79.9,
    minLatitude: 32.7,
    minLongitude: -80
  };

  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 24,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  }

  _markers: Array<ILatLong> = new Array<ILatLong>();

  addresses: Array<AddressMarker> = [
    {
      name: 'Emmy Collins',
      address: '2310 Peonie Avenue North Charleston, SC  29405'
    },
    {
      name: 'Chelsea E Bendt',
      address: '1707 Meyers Road Charleston, SC  29407'
    },
    {
      name: 'Meghan Sacco',
      address: '1688 west Sandcroft drive Charleston, SC  29407'
    },
    {
      name: 'Arlette O\'Rourke\'',
      address: '206 Otranto Club Regime Hanahan, SC  29410'
    },
    {
      name: 'David M & Abigail C Cooper',
      address: '2020 Proximity Dr Apt 211 Charleston, SC  29414'
    },
    {
      name: 'Michelle A Hannum',
      address: '107 Residences Lane Apt. 202 Charleston, SC  29414'
    },
    {
      name: 'Christopher M Knox',
      address: '3315 Conservancy Lane Charleston, SC  29414'
    },
    {
      name: 'Khris E Gunselman',
      address: '2769 Oak Manor Drive Mount Pleasant, SC  29466'
    },
    {
      name: 'Ryan P Hurley',
      address: '2600 Alderly Lane Mount Pleasant, SC  29466'
    },
    {
      name: 'Eric Ile',
      address: '2230 sandy point lane Mt pleasant, SC  29466'
    },
    {
      name: 'Yi-Chun (Annie) Lin',
      address: '2015 Andover Way Mount Pleasant, SC  29466'
    },
    {
      name: 'Jessica & Joseph Tufano',
      address: '2531 Woodstream Road Mount Pleasant, SC  29466'
    },
    {
      name: 'Jamal & Meaghan Jackson',
      address: '113 Malibu rd Summerville, SC  29483'
    },
    {
      name: 'Tracy L Bertuglia',
      address: '109 Thomaston Ave Summerville, SC  29485'
    },
    {
      name: 'Natalia Akst',
      address: '211 River Landing Drive apt # 359 Daniel Island, SC  29492'
    },
    {
      name: 'Melissa & Chris Alexander',
      address: '303 Cypress Walk Way Charleston, SC  29492'
    },
    {
      name: 'Brittany Antley',
      address: '1075 Peninsula Cove Dr Charleston, SC  29492'
    },
    {
      name: 'Liz & Jake Custer',
      address: '207 Ashmont Drive Charleston, SC  29492'
    },
    {
      name: 'Montana & Robert Detyens',
      address: '234 Ashmont Dr Charleston, SC  29492'
    },
    {
      name: 'Taryn M Dominguez',
      address: '234 nelliefield creek drive Charleston, SC  29492'
    },
    {
      name: 'Melissa Fisher',
      address: '426 Sanders Farm Lane Charleston, SC  29492'
    },
    {
      name: 'Eli K & Alyssa B Goldstein',
      address: '216 carriage hill place Charleston, SC  29492'
    },
    {
      name: 'Christnya H Parton & Stephen R Goodwin',
      address: '1368 Water Edge Drive Charleston, SC  29492'
    },
    {
      name: 'Lindsay D & Matt W Greene',
      address: '2581 Daniel Island Drive Charleston, SC  29492'
    },
    {
      name: 'Ajanaclair Lynch',
      address: '1046 Hastie Road Charleston, SC  29492'
    },
    {
      name: 'Shawna L Hall',
      address: '115 Berkshire Drive Charleston, SC  29492'
    },
    {
      name: 'Quandaisha Porcher',
      address: '127 Ephesian Court Wando, SC  29492'
    },
    {
      name: 'Seymoura & Timothy Marsac',
      address: '203 Rice Mill Place Charleston, SC  29492'
    },
    {
      name: 'Jessica Mirrielees',
      address: '1474 Wando Landing Street Daniel Island, SC  29492'
    },
    {
      name: 'Sarah K Moore',
      address: '3025 Haswell Street Apt 1501 Daniel Island, SC  29492'
    },
    {
      name: 'Melissa C Negreiros',
      address: '132 Indigo Marsh Circle Charleston, SC  29492'
    },
    {
      name: 'Dan & Joy Newlin',
      address: '532 Barbados drive Charleston, SC  29492'
    },
    {
      name: 'Veronica P Odom',
      address: '465 Nelliefield Trail Charleston, SC  29492'
    },
    {
      name: 'Patrick J O\'Rourke\'',
      address: '1104 River Bay Ln. Charleston, SC  29492'
    },
    {
      name: 'Chris & Rebecca L Perrine',
      address: '1404 Sandstone Pl. Charleston, SC  29492'
    },
    {
      name: 'Marni J & Michael Perrino',
      address: '532 Nelliefield Trail Charleston, SC  29492'
    },
    {
      name: 'Victor & Kely Price',
      address: '114 Franklin Retreat Ct Charleston, SC  29492'
    },
    {
      name: 'Dana Wigfall',
      address: '305 Seven Farms Apt. 312 Charleston, SC  29492'
    },
    {
      name: 'Kelley Williams',
      address: '531 Nelliefield Trail Charleston, SC  29492'
    },
    {
      name: 'Jessica Wofford',
      address: '145 Sandshell Drive Charleston, SC  29492'
    },
    {
      name: 'Erin Woodis',
      address: '106 Clouter Creek Drive Charleston, SC  29492'
    },
    {
      name: 'Megan & Daniel Minkin',
      address: '490 Hyacinth Loop Murrells Inlet, SC  29576'
    },
    {
      name: 'Emily C Fratantuono',
      address: '10346 White Deer Pl NW Silverdale, WA  98383'
    },
    {
      name: 'Samantha M Hincks',
      address: '4791 lambs rd Charleston, SC  29418'
    },
    {
      name: 'Maggie & Cory T Figueroa',
      address: '1188 Preakness Court Awendaw, SC  29429'
    },
    {
      name: 'Gergana Pencheva',
      address: '216 Seth Court Goose Creek, SC  29445'
    },
    {
      name: 'Mandi B Wells',
      address: '110 Brick Greens Road Goose Creek, SC  29445'
    },
    {
      name: 'Katie & Jon King',
      address: '256 Broadpath Road Huger, SC  29450'
    },
    {
      name: 'Danielle Williams',
      address: '526 Dallas Lane Huger, SC  29450'
    },
    {
      name: 'Hollis B Mallory',
      address: '1054 Anna Knapp Blvd Apartment 12G Mt. Pleasant, SC  29464'
    },
    {
      name: 'Sarah Coolidge',
      address: '3151 Sturbridge Rd Mt. Pleasant, SC  29466'
    },
    {
      name: 'Lindsey & Steven Draugel',
      address: '3048 Queensgate Way Mt. Pleasant, SC  29466'
    },
    {
      name: 'Heather E Ford',
      address: '2894 Clearwater Drive Mount Pleasant, SC  29466'
    },
    {
      name: 'Sanjeev Awasthi & Pratibha Shukla',
      address: '7751 Farr St Apt 1010 Daniel Island, SC  29492'
    },
    {
      name: 'Angela & Mike Balog',
      address: '1373 Palm Cove Drive Charleston, SC  29492'
    },
    {
      name: 'Joy Robinson',
      address: '228 Kelsey Blvd Charleston, SC  29492'
    },
    {
      name: 'Shannon C & Steven R Baskin',
      address: '516 Sanders Farm Lane Charleston, SC  29492'
    },
    {
      name: 'Luisa & Wesley C Benefield',
      address: '1006 Washitonia Way Unit D Charleston, SC  29492'
    },
    {
      name: 'Catherine Berube-Jarrell',
      address: '5101 Sweet Pl. Charleston, SC  29492'
    },
    {
      name: 'Sara & Robert Bohnstengel',
      address: '1292 Palm Cove Dr Charleston, SC  29492'
    },
    {
      name: 'Shelbi H Brueckner',
      address: '113 Rowans Creek Drive Charleston, SC  29492'
    },
    {
      name: 'Andrew C Campos & Lee C Henggeler',
      address: '304 Megans Bay Lane Charleston, SC  29492'
    },
    {
      name: 'Brooke N & Bryan A Chianella',
      address: '517 Nelliefield Trail Charleston, SC  29492'
    },
    {
      name: 'Gray Hodgden',
      address: '106 oolong tea Ct Charleston, SC  29492'
    },
    {
      name: 'Gitte Holm-Moller',
      address: '1709 Doldridge Street Daniel Island Charleston, SC  29492'
    },
    {
      name: 'Gregory T & Carolyn R Hudson',
      address: '1133 Thrower St Charleston, SC  29492'
    },
    {
      name: 'Hilary Kiley',
      address: '515 ROBERT DANIEL DR APT 4109 Charleston, SC  29492'
    },
    {
      name: 'Kimberly A & Jason Knight',
      address: '497 Yellow House Place Charleston, SC  29492'
    },
    {
      name: 'Shelly M Leeke',
      address: '111 Ithecaw Creek Street Daniel Island, SC  29492'
    },
    {
      name: 'Medley MacBride',
      address: '1127 Peninsula Cove Dr Charleston, SC  29492'
    },
    {
      name: 'Kimberly & Marlon Maldonado',
      address: '1272 Crooked Oak Road Charleston, SC  29492'
    },
    {
      name: 'Gaurav Malhotra',
      address: '1030 Jack Primus Rd APT 5204 Charleston, SC  29492'
    },
    {
      name: 'Layne S Manos',
      address: '1136 Peninsula Cove Dr Charleston, SC  29492'
    },
    {
      name: 'Nanda K & Reena M Ragala',
      address: '159 Rowans Creek Dr Charleston, SC  29492'
    },
    {
      name: 'Amy & Scott C Romfo',
      address: '1310 Newport Court Charleston, SC  29492'
    },
    {
      name: 'Caroline T Simonsen',
      address: '203 Sawyer Circle Charleston, SC  29492'
    },
    {
      name: 'Quinesha L & Kira Vanderhorst',
      address: '114 Kira Way Wando, SC  29492'
    },
    {
      name: 'Jennifer Sheppard',
      address: '1351 Palm Cove Dr Charleston, SC  29492'
    },
    {
      name: 'Sarah Southall',
      address: '482 Sanders Farm Lane Charleston, SC  29492'
    },
    {
      name: 'Margaret A St. John',
      address: '1076 Bennington Dr Charleston, SC  29492'
    },
    {
      name: 'Anna E Stoudenmire',
      address: '101 Royal Assembly Drive Charleston, SC  29492'
    },
    {
      name: 'Alicia Traywick',
      address: '219 Sawyer Circle Unit 818 Charleston, SC  29492'
    },
    {
      name: 'Kristine N White',
      address: '206 Sawyer Circle Apt 327 Charleston, SC  29492'
    }
  ]
  i = 0;
  constructor(addressService: DataService) {
    console.log(this.addresses.length);
    this.updateMap(addressService);
    // setTimeout(this.updateMap, 500, addressService, this._markers);
    // this.updateMap(addressService);
    // this.addresses.forEach(address => {
    //   
    // });
  }

  updateMap(addressService: DataService) {
    this.addresses.forEach(address => {
      addressService.getLocation(address.address).subscribe(bingLocationResponse => {
        let lat = 0;
        let long = 0;
        bingLocationResponse.resourceSets.forEach(resourceSet => {
          resourceSet.resources.forEach(resource => {
            lat = resource.geocodePoints[0].coordinates[0];
          });
        });
        bingLocationResponse.resourceSets.forEach(resourceSet => {
          resourceSet.resources.forEach(resource => {
            long = resource.geocodePoints[0].coordinates[1];
          });
        });
        this._markers.push({ latitude: lat, longitude: long });
      });
    });

  }

  _click(index: number) {
    console.log(`Marker ${index} says: hello world...`);
  }
}
