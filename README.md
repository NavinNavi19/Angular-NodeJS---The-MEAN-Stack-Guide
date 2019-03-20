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
- Different types of getting a value from the class Event Binding and String Intropolation.
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
- Installed `ng add @angular/material` Angular Material Theme with Pink template, Hammerjs installed and Browser Animation Included.
- Added Post Model into all the components.
- Improved all the bindings and form errors handling
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzMwOTEwNDkyLC0xNzY2MzIzNzUyLC0xNT
k5MzI1NzY1LC0xNjEwMjMwNzc4LDE1MzEyNjg3MTIsLTE2MjY4
OTk3MjIsMTQxNDgxMTUwOSwtNDc1Mjg3MzAxLC02NjM3OTQxMj
EsMTE0OTcxNDQ3NywtMTY5ODM4MzMyOV19
-->