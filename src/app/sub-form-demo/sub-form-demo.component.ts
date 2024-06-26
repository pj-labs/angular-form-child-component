import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { OrganizationComponent } from './organization/organization.component';

@Component({
	selector: 'app-sub-form-demo',
	standalone: true,
	imports: [EmployeeComponent, OrganizationComponent],
	templateUrl: './sub-form-demo.component.html',
	styles: ``,
})
export class SubFormDemoComponent {}
