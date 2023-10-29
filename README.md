# Angular Form Child Component

This repository is a simple example of how to use a `formCpntrolName` or `formControl` in child component. 
The parent component defines a form group and the child component can define a form control.

The parent component also handles the form submission.


```angular2html
  <form [formGroup]="formGroup" class="min-w-min justify-center m-4">
  <div class="mb-4">
    <label class="block text-gray-700" for="name">First Name: </label>
    <input formControlName="firstName" id="firstName" placeholder="First Name" type="text">
  </div>
  <div class="mb-4">
    <label class="block text-gray-700" for="name">Last Name: </label>
    <input formControlName="lastName" id="lastName" placeholder="Last Name" type="text">
  </div>
  <app-child formControlName="email"></app-child>
  <button type="submit">Submit</button>
  <br/>
</form>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

