import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule,ChildComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  fb = inject(FormBuilder);

  formGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
  });
}
