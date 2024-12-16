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
  2. Routing 
  3. HTTP calls 
  4. Forms 
  5. Lazy Loading 

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






## Directives 







<!-- 
      <p>The current count is: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
      -->