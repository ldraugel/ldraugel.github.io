export class BingLocationResponse {
    public resourceSets: ResourceSets[];
}

class ResourceSets {
    public resources: Resource[];
}

class Resource {
    public address: Address;
    public geocodePoints: GeocodePoints[];
}

class Address {
    public addressLine: string;
    public adminDistrict: string;
    public adminDistrict2: string;
    public countryRegion: string;
    public formattedAddress: string;
    public locality: string;
    public postalCode: string;
}

class GeocodePoints {
    public coordinates: number[];
}