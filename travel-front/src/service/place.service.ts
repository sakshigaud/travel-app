import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Place} from '../model/place';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}; 

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  private placeUrl: string;

  constructor(private http : HttpClient, private router: Router) {
    this.placeUrl = 'http://localhost:8080/rest/places';
   }

   public findAll(): Observable<Place[]>{
    return this.http.get<Place[]>(this.placeUrl);
  }

  public save(place: Place){
    return this.http.post<Place>(this.placeUrl, place);
  } 

  public delete(place: Place){
    return this.http.delete<Place>(`${this.placeUrl}\\${place.id}`, httpOptions);
  }

  public displayList(){
      this.router.navigate(['/places']);
    }

  public updatePlace(place: Place){
    return this.http.put<Place>(`${this.placeUrl}\\${place.id}`, httpOptions);
  }
  }


