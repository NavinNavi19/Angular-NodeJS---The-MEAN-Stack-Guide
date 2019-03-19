# Angular-NodeJS---The-MEAN-Stack-Guide
Angular &amp; NodeJS - The MEAN Stack Guide - Udemy Course Notes

## Section 1
### Getting Started
- MEAN ( Mongo, Express, Angular, Node)
- Install Node, Angular CLI `npm install -g @angular/cli`
- ng serve will serve in default port and host.
- To change the host and port, added `"port": 8080", "host": "0.0.0.0"` in "serve" object inside angular.json file.
- Basic default app served.
- Learned the angular app folder components.

## Section 2
### The Angular Frontend - Understanding the Basics
- created a new post-create component.
- Different types of getting a value from the class Event Binding and String .
	```html
	<textarea rows="6" [value]="newPost"></textarea>
	<hr>
	<button (click)="onAddPost()">Save Post</button>
	<p>{{ newPost }}</p>
	```
- Learned about two way binding with [(ngModel)].
	```html
	<textarea rows="6" [(ngModel)]="enteredValue" ></textarea>
	<hr>
	<button (click)="onAddPost()">Save Post</button>
	<p>{{ newPost }}</p>
	```
	```ts
	export class PostCreateComponent {
    
	    enteredValue = '';
	    newPost = 'No Content';
	    
	    onAddPost() {
	        this.newPost = this.enteredValue;
	    }
	}
	```
- 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYyMDkyNDAyNiwxNTMxMjY4NzEyLC0xNj
I2ODk5NzIyLDE0MTQ4MTE1MDksLTQ3NTI4NzMwMSwtNjYzNzk0
MTIxLDExNDk3MTQ0NzcsLTE2OTgzODMzMjldfQ==
-->