import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github/github.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

  public q: string;
  public totalRecords;
  public searchResults;

  constructor(private router: Router, private githubSergice: GithubService) { }

  ngOnInit() {    
  }

  onKeyup(event) {
    this.q = event.target.value;    
  }

  onClick() {
    this.githubSergice.getUsers(this.q).subscribe(
      res => {
        console.log('in Controller now', res)
        this.searchResults = res;
        this.totalRecords = res.total_count;      
        this.q = null;
      }
    )
  }

  getDetails(user) {
    console.log(user);
    this.router.navigate(['user', user.login]);
  }

}
