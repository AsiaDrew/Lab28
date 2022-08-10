import { Component } from '@angular/core';
import { Reddit } from './Reddit';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'PaupersReddit';

  redditArray: Reddit [] = [];

  constructor(private reddit: RedditService){
    
  }

  getReddit(): void{
    this.reddit.getReddit(this.title).subscribe( 
    (response: Reddit) => {
      this.redditArray.push(response);
    });
  }
 }
