import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../../child/child.component';
import { AddressComponent } from '../../address/address.component';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-employee',
	standalone: true,
	imports: [ChildComponent, ReactiveFormsModule, AddressComponent, JsonPipe],
	templateUrl: './employee.component.html',
	styles: ``,
})
export class EmployeeComponent {
	fb = inject(FormBuilder);

	formGroup = this.fb.group({
		firstName: [''],
		lastName: [''],
		email: [''],
	});
}
