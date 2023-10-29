import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildComponent),
      multi: true,
    },
  ],
  template: `
    <div class="mb-4">
      <label class="block text-gray-700" for="name">Email: </label>
      <input
        (input)="changeValue($event)"
        (change)="changeValue($event)"
        type="text"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="email"
        placeholder="Email"
      />
    </div>
  `,
})
export class ChildComponent implements ControlValueAccessor {
  @Output('change') changeEvent = new EventEmitter();
  value: string = '';
  private _disabled = false;
  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  constructor(private _cd: ChangeDetectorRef) {}

  writeValue(obj: any): void {
    this.value = obj;
    this._onChange(obj);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
    this._cd.markForCheck();
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
    this._cd.markForCheck();
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this._cd.markForCheck();
  }

  changeValue($event: any) {
    this.value = $event.target.value;
    this._onChange(this.value);
    this.changeEvent.emit(this.value);
  }
}
