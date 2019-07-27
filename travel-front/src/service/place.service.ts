import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Place} from '../model/place';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap} from 'rxjs/operators'; 
import { throwError } from 'rxjs'; 

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

  public delete(id: number){
    return this.http.delete<Place>(`${this.placeUrl}\\${id}`, httpOptions)
    .pipe(
        tap(_ => console.log(`deleted place: ${id}`)),
        catchError(err => {
          console.log(err.message);
          return throwError("Error thrown from catchError");
        })
    );
  }


  public displayList(){
      this.router.navigate(['rest/places']);
    }

  public updatePlace(place: Place){
    console.log(place);

    return this.http.put<Place>(`${this.placeUrl}\\${place.id}`, place, httpOptions)
    .pipe(
      tap(_ => console.log(`Updated place: #${place.id}`)),
      catchError(err => {
        console.error(err.message);
        return throwError("Error thrown from catchError");
      })
 );
  }
  }


