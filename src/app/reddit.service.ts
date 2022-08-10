import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }
  url: string = "https://www.reddit.com/r/";
  ending: string = "/.json";

  getReddit(subReddit:string){
    return this.http.get(this.url + subReddit + this.ending);
  }
}