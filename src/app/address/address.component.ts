import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-address',
	standalone: true,
	imports: [ReactiveFormsModule],
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormGroupDirective,
		},
	],
	templateUrl: './address.component.html',
	styles: ``,
})
export class AddressComponent implements OnInit {
	parent: FormGroupDirective;
	fb = new FormBuilder();

	constructor(parent: FormGroupDirective) {
		this.parent = parent;
	}

	ngOnInit() {
		this.parent.form.addControl(
			'address',
			this.fb.group({
				street: this.fb.control('', [Validators.required]),
				city: this.fb.control('', [Validators.required]),
				state: this.fb.control('', [Validators.required]),
				zipCode: this.fb.control<number | undefined>(undefined, [Validators.required]),
			}),
		);
	}
}
