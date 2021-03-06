Task 2 : Work with Angular

Stage 1 : Create an angular App :
ng new <<Project Name>>
Upon providing it, these details will be asked for
1. Need routing (Yes/No)
2. CSS type - (CSS/SCSS/..)

------------------------------------------------------------------------------------------------------------------------------

Stage 2 : Starting the server in Angular App : 
Type 1 : ng serve -> This will start an angular server in default IP : localhost and port : 4200
Type 2 : ng serve --host <<IP Address>> -port <<Port>> -> This will start the server in the specified IP and specified port.

Things will compile and the server URL will be provided, access the URL and check if the server is up/not

------------------------------------------------------------------------------------------------------------------------------

Stage 3 : Understanding the file structure(folders) and files : 

1. angular.json
    This holds the details of the project like name, version, build output path

2. package.json
    This tells which libraries should the node modules should be importing, kept under dependencies. 

3. tsconfig.json
    This contains the compiler options required during compilation

4. src 
    This folder contains all the source code of the project.

    4.1 app
        This folder contains the base component. Any new component configuration should be entered here. 
        There exists a naming convention for files under this folder. <<Component Name>>.component.type

        4.1.1 app.component.html
            This file contains the HTML template of the component. 

        4.1.2 app.component.ts
            This file is one of the most important files in this component. This file choses the template to be used where the component to be pasted in the browser and which set of styling should be applied. 
        
        4.1.3 app.module.ts
            This file is one of the most important files in this component. This file contains the imports that need to done to use in this component. And declare the component exported from the above app.component.ts file. 

5. node_modules
    This file contains all the imported dependencies. 

------------------------------------------------------------------------------------------------------------------------------

Stage 4 : Creating a new component : 

A new component can be create by 2 types : 

Type 1 : Manually

Steps for manually creating a component : 

1. Create a folder named "manualComponent"
2. Create the files - (manualComponent.component.html, manualComponent.component.ts, manualComponent.module.ts)
3. Content within 

    3.1 manualComponent.component.html
        Some html code that needs to be displayed when the server

    3.2 manualComponent.component.ts
        This file contains : @Component which declares the templateUrl, selector, stylesheet and the export Class which will have parameters that needs to be populated in the html component. 

    3.3 manualComponent.module.ts
        This file contains : @NgModule which has declarations -> Component exported above, imports -> Browser Module, bootstrap, providers

4. Now for this content to be displayed in the HTML, this selector should be added in the app.component.html


Type 2 : Command Line : 

type ng generate component <<Component Name>> in the command line, Angular will automatically create a new component. 

------------------------------------------------------------------------------------------------------------------------------

Stage 5 : Angular Interpolation & Data Binding : 

Angular Interpolation is evaluating a variable using {{variable}}

Angular Data Binding is evaluating a variable using [value]="variable"

------------------------------------------------------------------------------------------------------------------------------

Stage 6 : Event Binding to Angular

Now to bind an event to angular component. 

1. add (click)/(select) variable to the button
2. export the onclick event from exportClass method

------------------------------------------------------------------------------------------------------------------------------

Stage 7 : Template Variable : 

Use of template variable helps passing the value of the html element to Typescript

Template variable declaration ==> #template_variable

Put it in the HTML

------------------------------------------------------------------------------------------------------------------------------

Stage 8 : Difference between template and Template URL

Template URL : points to the HTML file which acts as the template for the HTML

Template : If the content is too small that using Template URL seems much work, we can provide the HTML content directly in the Component

    Type 1 : Single line :
        template : 'HTML content'

    Type 2 : Multi line : 
        template : `HTML Content`

------------------------------------------------------------------------------------------------------------------------------

Stage 9 : View Child Decorator.

View Child decorator is used to access the child component. 

This is achieved by using this decorator at export class @ViewChild(VariableName)

This variableName should be declared in HTML. This variable accessess as the referring variable.

We can use it to refer the component and then set the data to that component

------------------------------------------------------------------------------------------------------------------------------

Stage 10 : Angular Two Way Binding. 

Angular Two way binding is a method where the data is kept in sync between the component and the template. This is achieved using a specific Syntax. [()]. This syntax is known as "Banana Box Syntax". 

For this to take effect we need to import FormsModule in @angular/forms. 
------------------------------------------------------------------------------------------------------------------------------

Stage 11 : Ng-content

Ng-Content is used to dynamically paste the data. It does what interpolation does but in a larger scale. Also this is used to use reuse components. 

<ng-content> tag is declared in the child component. And the data for the ng-content is passed from Parent Component.

------------------------------------------------------------------------------------------------------------------------------

Step 12 : Input and output properties

Input & Output properties are used to move the data from Parent to Child component and vice versa.

Steps to declare the input props 

    Parent Component.html

    <new-selector [childDataPassingParameter]="Data">

    Parent Component.ts

    export AppComponent{
        Data : string = "Data";
    }

    Child Component.ts

    export ChildComponent{
        @Input("childDataPassingParameter") public variableName;
    }

    Child Component.html

    {{variableName}}

Steps to declare output props

    Data from Child to Parent will be shared only on any event.

------------------------------------------------------------------------------------------------------------------------------

Step 13 : Angular Service and Dependency Injection : 

Data that are fetched from the data base or through any other means are served to the front end by the help of "Service". For this we will be using the concept of Dependency Injection. 

As an initial measure, the data table shown is written with Hard Coded data in the typescript of the respective component. The disadvantage with this type is that this same data is hard to share with another component. To avoid it we will be using the service method to do the data provider job and use dependency injection to obtain the data from ther service to the required component

To create the service we need to type in the command,

ng generate services <<service name>>

This would create files with the name <<service name>>.services.ts and <<service name>>.service.spec.ts

Then write a function to fetch the required data and return it.

Initialise the class in constructor in the required component, with it call to get the required data. 

Difference between ngOnInit and constructor : 

    1. Constructor is called prior to ngOnInit. 
    2. And its better to keep the data assigning part always on the init. 

Data assigning can be done both in Constructor and ngOnInit. Both would produce the same result. 

------------------------------------------------------------------------------------------------------------------------------

Step 14 : Angular Observable

Angular HTTP methods return data to service as an Observable object. We need to work with the Observable object to bring this to component to show that up to the customer. 

There are 4 steps that we need to follow to get the data and show in the component. 

1. Make a HTTP Request.
2. Get an Observable response.
3. Type Cast the observable to required data format.
4. Schedule a listening.

Steps to achieve this as per with this example. - We will be trying this with the command line component.

1. Data can be retrieved from Database or through an API to another service. Since we don't have any DB to contact, we are hard-coding the response in a File under assets>JSONData>DataFile.json

2. Create a service which will get the data from this file.
    2.1 Constructor should be having the Http Client as a parameter.

3. Casting is Done by creating a new ts file and exporing an interface that will have the keys from the data. 

4. Subscribe the data.

------------------------------------------------------------------------------------------------------------------------------

Step 15 : 

Template Forms

There are 2 types of forms in Angular
1. Template based forms
2. Reactive Forms

Right now we are about to see the template forms alone.

Template based forms have the advantage of using the built in validators. Reactive based forms cant use built in forms. 

Inside a form, for any input type, we would have #variable="ngModel" and use this variable to check if there are any errors or not.