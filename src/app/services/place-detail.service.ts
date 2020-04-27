import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { PlaceDetails } from "../shared/models/place-list";
import { localUrl } from "../config/constant";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailService {

  constructor(private http: HttpClient) { }

  getPlaceDetail(): Observable<PlaceDetails[]> {

    return this.http.get<PlaceDetails[]>(localUrl).pipe(retry(1), catchError(this.errorHandler));
  }

 private errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
