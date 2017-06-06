import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class GithubService {
  
  constructor(private http: Http) { 
  }

  getUsers(q): Observable<any> {
    let url = `https://api.github.com/search/users?q=${q}`;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        return data;
      }
    )
  }

  getUserDetails(userId): Observable<any> {
    let url = `https://api.github.com/users/${userId}`;
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }

}
