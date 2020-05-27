import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTestApp';

  dataSync = "Hello";

  childData : string = "This data is processed from Parent Data to Child Data";

  message = "";
}
