# Angular 
## Building Blocks in Angular
  1. Components 
  2. Directives (fn)
  3. Services 
  4. Interfaces / Models 
  5. Classes [TODO]
  6. Modules 
  7. Guards (fn )
  8. Pipes 
  9. Interceptors 

## Concepts
  1. Data Binding 
  2. Routing [DONE]
  3. HTTP calls 
  4. Forms 
  5. Lazy Loading 

### 7 characteristics of SPA
  1. Page should NOT refresh 
  2. URL should be changed  [DONE]
  3. Browser history should be maintained w/o page refresh 
  4. Retain header and footer without reloading them again and again 
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
  1. Standalone Components 
  2. NgModule based components 


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