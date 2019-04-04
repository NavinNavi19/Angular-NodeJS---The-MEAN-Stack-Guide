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
  `html <textarea rows="6" [value]="newPost"></textarea> <hr> <button (click)="onAddPost()">Save Post</button> <p>{{ newPost }}</p>`
- Learned about two way binding with [(ngModel)].
  `html <textarea rows="6" [(ngModel)]="enteredValue" ></textarea> <hr> <button (click)="onAddPost()">Save Post</button> <p>{{ newPost }}</p>`

  ````ts
  export class PostCreateComponent {
      	    enteredValue = '';
      	    newPost = 'No Content';

      	    onAddPost() {
      	        this.newPost = this.enteredValue;
      	    }
      	}
      	```
  ````

- Installed `ng add @angular/material` Angular Material Theme with Pink template, Hammerjs installed and Browser Animation Included.
- Added Post Model into all the components.
- Improved all the bindings and form errors handling
- Learned about observables, observer and subscriptions.
- Used rxjs for the above events.

## Section 3

### Adding NodeJS to our Project

- Installed Express generated Node application - Remove unwanted packages later as per the use.
- `npm install` for installing from github.
- Nodemon Error `[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/navin/Apps/Github/Angular-NodeJS---The-MEAN-Stack-Guide'` and the solution is to increase the no of watchers in system level `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

## Section 4

### Working with Mongo DB

- Created a new project and cluster for this course in Mongo DB Atlas.
- Installing Mongoose.
- Finally integrated Angular, Node and Mongoose

## Section 5

### Enhancing the app

- Working with Angular RouterModule.
- Adding the edit button.
- Saving them using PUT Request.
- Adding the spinner for loading.

## Section 6

### Adding Image Uploads

- Adding the image and Preview done.
- Image Validation.
- Saving the image in backend and accessing them with Angular.
- Finally Images can be changed using edit button.

## Section 7

### Adding Pagination

- Added Pagination using Angular Material and Mongoose support.

## Section 8

## User Authentication

- New Login and Signup form has been setup on the Angular.
- Installed `mongoose-unique-validator` for unique email ID check.
- Installed `jsonwebtoken` for user login validation.
- Adding middleware for token validation on the server side.
- Added auto redirection to home after login and logout.
- Adding guards to guard the links.
- Adding token expiration details in frontend.

## To do

- https://academind.com/learn/angular/snippets/angular-image-upload-made-easy/
