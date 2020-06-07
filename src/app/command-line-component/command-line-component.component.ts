import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../games-service.service';


@Component({
  selector: 'app-command-line-component',
  templateUrl: './command-line-component.component.html',
  styleUrls: ['./command-line-component.component.css']
})
export class CommandLineComponentComponent implements OnInit {

  gamesData = [ ];

  constructor(private _gamesService : GamesServiceService){

  }
  
  // ngOnInit(){

  // }

  ngOnInit(){
    this._gamesService.getData().subscribe(data => this.gamesData = data);
  }

}
