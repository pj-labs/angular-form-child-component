# Angular Form Child Component

This repository is a simple example of how to use a `formControlName` or `formControl` in child component. 
The parent component defines a form group and the child component can define a form control without needing to pass the form group to the child component.

The parent component also handles the form submission.

[app.component.ts](src%2Fapp%2Fapp.component.ts)
```typescript
  formGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
  });
```
[app.component.html](src%2Fapp%2Fapp.component.html)
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

Run `npm run start` for a dev server. Navigate to http://localhost:4200

