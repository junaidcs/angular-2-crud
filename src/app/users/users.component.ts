import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [GithubService]
})
export class UsersComponent implements OnInit {

  public q: string;
  public users;

  public totalRecords;
  public searchResults;

  constructor(private githubSergice: GithubService) { }

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
    console.log(user)
  }

}
