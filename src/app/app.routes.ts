import { Routes } from '@angular/router';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { SubFormDemoComponent } from './sub-form-demo/sub-form-demo.component';

export const routes: Routes = [
	{
		path: '',
		component: SubFormDemoComponent,
	},
	{
		path: 'child-demo',
		component: ChildDemoComponent,
	},
	{
		path: 'sub-form-demo',
		component: SubFormDemoComponent,
	},
];
