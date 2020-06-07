import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataServiceService {

  private nameListArray = [
    {"sNo" : 1, "Name" : "Nimal N N" , Age : 23},
    {"sNo" : 2, "Name" : "Nallasamy N" , Age : 56},
    {"sNo" : 3, "Name" : "Amutha" , Age : 47},
    {"sNo" : 4, "Name" : "Venkat" , Age : 23},
    {"sNo" : 5, "Name" : "Athithya" , Age : 22}
  ];
  constructor() { }

  getData() {
    return this.nameListArray;
  }
}
