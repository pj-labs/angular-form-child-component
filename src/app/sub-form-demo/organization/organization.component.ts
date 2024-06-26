import { Component, inject } from '@angular/core';
import { ChildComponent } from '../../child/child.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../../address/address.component';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'app-organization',
	standalone: true,
	imports: [ChildComponent, ReactiveFormsModule, AddressComponent, JsonPipe],
	templateUrl: './organization.component.html',
	styles: ``,
})
export class OrganizationComponent {
	fb = inject(FormBuilder);

	formGroup = this.fb.group({
		name: [''],
		type: [''],
	});
}
