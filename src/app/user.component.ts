import { Component } from '@angular/core'

@Component({
	selector: 'app-user',
	template: `
		<input type="text" (input)="onUserInput($event)" [value]="name">
    <!-- 2-way binding of the above statement -->
    <!-- event binding and property binding together -->
    <input type="text" [(ngModel)]="name" />
		<p>Hello {{name}} <p>
		<p>I'm the user</p>
	`
})
export class UserComponent {
	name = 'CTNins'

	onUserInput(event) {
		this.name = event.target.value;

	}
}
