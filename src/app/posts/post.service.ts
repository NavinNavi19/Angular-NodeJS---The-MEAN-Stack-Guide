import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})

export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    
    constructor(private http: HttpClient) {}
    
    getPosts() {
        this.http.get<{message: String, posts: Post[]}>('https://yelpcamp-navinnavi19.c9users.io/api/posts')
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
        
    }
    
    getPostUpdateListener(){
        return this.postsUpdated.asObservable();
    }
    
    addPost(title: string, content: string) {
        const post: Post = { id: null, title: title, content: content };
        this.http.post<{message: String}>('https://yelpcamp-navinnavi19.c9users.io/api/posts', post)
            .subscribe((responseData) => {
                console.log(responseData.message);
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });
        
        
    }
}