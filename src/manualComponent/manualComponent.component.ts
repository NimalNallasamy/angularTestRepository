import { Component } from '@angular/core';

@Component({
    templateUrl : './manualComponent.component.html',
    selector : 'manualComponent',
    //styleUrls : [''] No Selectors needed as of now
})

export class manualComponent{
    interpolatedVar : string = "This is acheived by Angular Interpolation";
    dataBindingVar : string = "This is achieved by Angular Data Binding";

    buttonFunction() {
        console.log("Console Logging");
    }

    onKeyUpFunc(templateVariable){
        console.log(templateVariable.value);
    }
}