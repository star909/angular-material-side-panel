export interface PlaceDetails {
    id: number;
    name: string;
    lat: number;
    lng: number;
    logo: string;
    address: string;
    value: number;
    operating_hours: string;
    number: number;
    details: [{
        name: string;
        date: string;
        rating: number;
        comments: string;
    }]
}