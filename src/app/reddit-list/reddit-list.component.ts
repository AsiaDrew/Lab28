import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reddit } from '../Reddit';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {

  values: Reddit = {} as Reddit;
  constructor(private apiService: RedditService) { }

  ngOnInit(): void {
    this.populateReddit("aww");
  }
  populateReddit(subreddit:string): void {
    this.apiService.getReddit(subreddit).subscribe((response: any) =>{
      this.values = response;
    });
  }
  search(form:NgForm):void{
    this.populateReddit(form.form.value.subreddit);
}
}