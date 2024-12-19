# Angular 
## Building Blocks in Angular
  1. Components [DONE]
  2. Directives (fn) [DONE]
  3. Services [DONE]
  4. Interfaces / Models [DONE]
  5. Classes [TODO]
  6. Modules [DONE]
  7. Guards (fn ) 
  8. Pipes 
  9. Interceptors 

## Concepts
  1. Data Binding [DONE]
  2. Routing [DONE]
  3. HTTP calls [DONE]
  4. Forms [DONE]
  5. Lazy Loading [DONE]
  6. Any to Any Component Commn [DONE]

### 7 characteristics of SPA
  1. Page should NOT refresh [DONE]
  2. URL should be changed  [DONE]
  3. Browser history should be maintained w/o page refresh  [DONE]
  4. Retain header and footer without reloading them again and again  [DONE]
  5. Main Section should have contextual updates [DONE]
  6. Active Menu should be set [TODO]
  7. Page Title should also be changed  [TODO]

## Project Structure
  1. Building Block wise structure 
      src/
        app/
          components/
          directives/
          services/
          models/
          guards/
          ...
          ...

  2. Feature wise structure
      src/
        home/
        concepts/
        employee-management/
        products/
        about/

  3. Feature-wise and building block wise structure (RECOMMENDED)
      src/
        app/
          home/
            components/
            directives/
            services/
            models/
            guards/
          concets/
            components/
            directives/
            services/
            models/
            guards/
          employee-management/
            components/
            directives/
            services/
            models/
            guards/
          shared/
            components/
            pipes/
            interceptors/
              


## Components in Angular 18
  1. Standalone Components [DONE]
  2. NgModule based components  [DONE]


## Routing in Angular
  Step 0: 
    Identifying the menus and the urls 

      Home                        -- localhost:4200/
      Concepts                    -- localhost:4200/concepts
      Employee Management         -- localhost:4200/employee-management
      Products                    -- localhost:4200/products
      About                       -- localhost:4200/about

  Step 1:
    Identifying the components for the URLs 

      localhost:4200/                         -- HomeComponent
      localhost:4200/concepts                 -- ConceptsComponent
      localhost:4200/employee-management      -- EmployeeManagementComponent
      localhost:4200/products                 -- ProductsComponent
      localhost:4200/about                    -- AboutComponent

    Step 2: 
      Let's create the necessary components
        ng g c home/components/home --inline-style --inline-template 
        ng g c concepts/components/concepts --inline-style
        ng g c employee-management/components/employees --inline-style
        ng g c products/components/products --inline-style --inline-template
        ng g c about/components/about --inline-style --inline-template

    Step 3: 
      Let's setup the urls in menu.component.ts

    Step 4: 
      Let's check the output, url is not stable. Let's fix it

      Let's configure routes in app.routes.ts

    Step 5: 
      Let's check the output, url is now stable. But, the conextual updates are not happening. Let's fix it.

      The components should show up in between header and footer. 
      Let's add <router-outlet></router-outlet> in app.comp.html 

    Step 6: 
      The component is now showing up in between header and footer. But the pages are still refreshing. Let's fix it.

      replace all href with routerLink in menu.component.ts

      NOTE: for routerLink to work, we need to import RouterModule in menu.component.ts

    Step 7: 
      All over!

## Data Binding 
  * Keeping the data in component class and displaying in component html 
    1. Interpolation [DONE]
        TS => HTML 
        {{ }}
    2. Property Binding [DONE]
        TS => HTML element's property (attribute)
        []

    3. Event Binding [DONE]
        TS <== HTML
        ()

    4. Two Way Binding [DONE]
        TS <==> HTML
        [(ngModel)]

        Note: implement in form fields only


    5. Custom Property Binding [DONE]
    6. Custom Event Binding [DONE]

    * in Angular 17 onwards, Signals are used to update the data in the component.


### Cross Component Communication
========
  1. Parent to Child Component Communication [DONE]
      using Custom Property Binding 

  2. Child to Parent Component Communication 
      2.1 using Custom Event Binding (child component is sending the data to the parent)
      2.2 using @ViewChild()  -- [TODO]  (parent component accessing the data from child)

  3. Any to Any Component Communication
      Using RxJS/Observables, Subscription, Services

## Directives 
  * Special Instructions to the DOM 

  Types of Directives
    1. Attribute Directives
        examples: routerLink, routerLinkActive, routerLinkActiveOptions, required in form fields 
    2. Structural Directives
        * impacts will be on structural layer (html)

        1. *ngIf
        2. *ngFor
        3. ngSwitch [TODO]  also learn @switch

    3. Custom Attribute Directives 
        TODO: Learn about @HostBinding()
    4. Custom Structural Directives [TODO] 


## Forms

Types of forms in angular

#### Template Driven Forms
  * created with html
  * easiest
  * validations can be done with directives (required, maxLength, max, etc )
  * Disadvantages
    * 1. Not suitable for complex form validation
    * 2. Not suitable for unit testing


#### Reactive Forms (RECOMMENDED)
  * created with html + ts
  * easy
  * validations can be done with angular validators
  * Advantages
    * 1. suitable for complex form validation
    * 2. suitable for unit testing







### Naming Conventions & Casing
  #### Casing Types
  ##### 1. PascalCase 
      * Recommended for Object Oriented Program's classes 
      * also Recommended for Interface in TypeScript 

      examples 
      ---
        class CarDetails {

        }

        interface Employee {

        }

  ##### 2. camelCase 
      * Recommended for variables, const, functions, methods in JS & TS 
      * Recommended for id's of html elements 
      
      examples 
      -----
        var myCar = 'BMW';
        var isLoggedIn = true;
        var hasValidToken = true;

        function getCarInfo() {
          //....
        }

  ##### 3. kebab-case
      * Recommended for URLs 
      * Recommended for file names, folder names, assets in front end projects  
      * Recommended for css classes 
      * okay for id's of html elements if your architect says ok

      examples 
      -----
        btn-primary
        slideshow-container 
        youtube-logo.png 

  ##### 4. snake_case 
      * never ever use this. 
      * okay for const in JS & TS if architect accepts

      examples
      ---
        const MAX_STUDENTS_PER_CLASS = 30;


### What's Observable?
    It's a collection that returned over time. 
    It's a push, that sends multiple values
    Observable is like restaurant kitchen.
    If you subscribe to observable, it decides when to give information 
    Now, What's RxJs?
    Various method of operators, you can chain on Observables to filter data, sort, retry, catch error, convert


Modules
---
  1. Feature Module 
      ng g m products
  2. Feature Routes
      create a file named products/products.routes.ts

  Pipes 
  ---
    utilties for transforming data 
    1. uppercase 
    2. lowercase 
    3. date
    4. async 
    5. currency 
    6. json
    

Add Employee
  https://jsonplaceholder.typicode.com/users             - POST 

List Employees 
  https://jsonplaceholder.typicode.com/users             - GET 


Employee Details
  https://jsonplaceholder.typicode.com/users/1           - GET  


Update Employee Details
  https://jsonplaceholder.typicode.com/users/1           - PUT / PATCH  


Delete Employee 
  https://jsonplaceholder.typicode.com/users/1           - DELETE







      <div class="alert alert-success" *ngIf="isLoggedIn">
        <strong>You are authenticated!</strong>
      </div>

      @if (isLoggedIn) {
      <div class="alert alert-success">
        <strong>You are authenticated!</strong>
      </div>
      } @else {
      <div class="alert alert-danger">
        <strong>You are not authenticated. Please login</strong>
      </div>
      }