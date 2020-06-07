import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from './Games';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  pathUrl : string = "/assets/JSONData/gamesData.json";

  getData() : Observable<Games[]>{
    return this.http.get<Games[]>(this.pathUrl);
    // return null;
  }

  constructor(private http:HttpClient){

  }
}
