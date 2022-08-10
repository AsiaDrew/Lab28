import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }
  url: string = "https://www.reddit.com/r/";
  ending: string = "/.json";

  getReddit(subReddit:string): Observable<any>{
    return this.http.get(this.url + subReddit + this.ending);
  }
}