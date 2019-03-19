import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
    // posts = [
    //     { title: "First Post", content: "This is the First post's Content"},
    //     { title: "Second Post", content: "This is the Second post's Content"},
    //     { title: "Third Post", content: "This is the Third post's Content"}
    // ];
    
    @Input() posts = [];
    
}