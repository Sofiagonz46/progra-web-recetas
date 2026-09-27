import { Component } from '@angular/core';
import { USER_LIST_DATA } from '../../data/user-list-data';
import { POST_LIST_DATA } from '../../data/post-list-data';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  usersList = USER_LIST_DATA;
  postsList = POST_LIST_DATA;

  getUserPosts(userId: number) {
    return this.postsList.posts.filter(post => post.userId === userId);
  }
}