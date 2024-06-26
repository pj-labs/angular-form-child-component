import { Component, inject } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-child-demo',
	standalone: true,
	imports: [ChildComponent, ReactiveFormsModule],
	templateUrl: './child-demo.component.html',
	styles: ``,
})
export class ChildDemoComponent {
	fb = inject(FormBuilder);

	formGroup = this.fb.group({
		firstName: [''],
		lastName: [''],
		email: [''],
	});
}
