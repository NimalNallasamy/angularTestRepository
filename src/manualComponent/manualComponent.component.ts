import { Component, ViewChild, OnInit, ElementRef,EventEmitter, Input, Output } from '@angular/core';

@Component({
    templateUrl : './manualComponent.component.html',
    // template : '<br><br><br><p> Dummy Template </p>', // Single line content
    // template : `<br><br><br><p>Dummy Template Multi Line<p> 
    // <br>
    // <br>
    // <p>Next Line</p>`, // Multiple Line
    selector : 'manualComponent',
    //styleUrls : [''] No Selectors needed as of now
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
    }
}