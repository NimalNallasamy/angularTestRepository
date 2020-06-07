import { Component, ViewChild, OnInit, ElementRef,EventEmitter, Input, Output } from '@angular/core';
import { PersonalDataServiceService } from 'src/app/personal-data-service.service';

@Component({
    templateUrl : './manualComponent.component.html',
    // template : '<br><br><br><p> Dummy Template </p>', // Single line content
    // template : `<br><br><br><p>Dummy Template Multi Line<p> 
    // <br>
    // <br>
    // <p>Next Line</p>`, // Multiple Line
    selector : 'manualComponent',
    //styleUrls : [''] No Selectors needed as of now
    styleUrls : ['./manualComponent.component.css']
})

export class manualComponent implements OnInit{
    interpolatedVar : string = "This is acheived by Angular Interpolation";
    dataBindingVar : string = "This is achieved by Angular Data Binding";
    

    @Input('parentData') public parentData;

    @Output() public childDataOutput = new EventEmitter();

    callEvent(){
        this.childDataOutput.emit("This data is from Child Component");
        console.log("Exported the data to Parent Component");
    }

    dataSync : string = "Nimal";

    constructor(private _personalDataService : PersonalDataServiceService){

    }

    nameListArray = [];
    // nameListArray = [
    //     {"sNo" : 1, "Name" : "Nimal N N" , Age : 23},
    //     {"sNo" : 2, "Name" : "Nallasamy N" , Age : 56},
    //     {"sNo" : 3, "Name" : "Amutha" , Age : 47},
    //     {"sNo" : 4, "Name" : "Venkat" , Age : 23},
    //     {"sNo" : 5, "Name" : "Athithya" , Age : 22}
    // ];

    buttonFunction() {
        console.log("Console Logging");
    }

    onKeyUpFunc(templateVariable){
        console.log(templateVariable.value);
    }

    @ViewChild('someInput')
    someInput : ElementRef;

    ngOnInit():void{
        // this.viewChildDecorator.nativeElement.value = "Hello";
        console.log(this.someInput);
        this.nameListArray = this._personalDataService.getData();
    }
}