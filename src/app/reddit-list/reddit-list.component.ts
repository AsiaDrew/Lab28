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
  status:string ="";
  values: Reddit = {} as Reddit;
  constructor(private apiService: RedditService) { }

  ngOnInit(): void {
    this.populateReddit("aww");
  }
  populateReddit(subReddit:string): void {
    this.apiService.getReddit(subReddit).subscribe(
      (response: Reddit) =>{
      this.values = response;

      this.values.data.children.splice(10);
      this.status= "";
    },
    (error:any) => {
      console.log(error);
      this.status= "Could not find subreddit";
    }
    );
  }
  search(form:NgForm):void{
    this.populateReddit(form.form.value.subreddit);
}
}