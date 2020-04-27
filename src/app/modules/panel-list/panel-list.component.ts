import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PlaceDetailService } from "../../services/place-detail.service";
declare var google: any;

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit, AfterViewInit {

  placeDetail: Array<any> = [];
  openDetailList: boolean = false;
  bhel: Object = { lat: 15.91290, lng: 79.73999 };
  marker: any;
  zoom: number;
  selectedData: any;
  map: any;
  buttonName: string;
  finalPlaceData: Array<any> = [];
  @ViewChild("map", { static: true }) mapRef: ElementRef;
  clickedPlace: string;
  clickedAddress: string;
  reviews: Array<any[]>;
  timings: string;
  number: number;
  picture: string;
  constructor(private detailService: PlaceDetailService) { }

  ngOnInit() {
    this.getAllPlaceData();
  }

  ngAfterViewInit() {

    /**Function to load map */

    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 1,
      center: this.bhel
    });
    this.marker = new google.maps.Marker({
      position: this.bhel,
      map: this.map
    });
  }
  /**Function to load detail data */

  public getDetails(data): void {
    this.openDetailList = true;
    this.selectedData = data;
    this.clickedPlace = this.selectedData.name;
    this.clickedAddress = this.selectedData.address;
    this.reviews = this.selectedData.details;
    this.timings = this.selectedData.operating_hours;
    this.number = this.selectedData.number;
    this.picture = this.selectedData.logo;
  }

  /**Function to close detail button */

  public closeDetailButton(): void {
    this.openDetailList = false;
  }


  /**Function to load map lat and long */
  public updateMap(lat: number, long: number, button): void {

    this.buttonName = button.name;
    this.marker.setMap(null);
    this.zoom = this.map.getZoom();
    this.marker = new google.maps.Marker({
      position: { lat: lat, lng: long },
      map: this.map
    });

  }

  /**Function to get the data by subscribing Observable  */

  private getAllPlaceData(): void {
    try {
      this.detailService.getPlaceDetail().subscribe(
        res => {
          this.placeDetail = res;
          console.log(this.placeDetail)
        },
        error => {
          console.log(error);
        }
      )
    } catch (ex) {
      console.log(ex);
    }
  }
}
