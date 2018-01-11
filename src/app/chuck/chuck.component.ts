import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {
  categories:any;
  joke:any;
  jokes = [];
  minInput: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.chucknorris.io/jokes/categories').subscribe(categories => {
      this.categories = categories;
    });
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(random => {
      this.jokes.push(random);
    })
  }

  onChange(category) {
    this.http.get('https://api.chucknorris.io/jokes/random?category='+category).subscribe(joke => {
      this.jokes = [];
      this.jokes.push(joke);
      console.log(joke);
    });
  }

  onSearchChange(searchValue){
if (searchValue.length > 3) {
  this.http.get('https://api.chucknorris.io/jokes/search?query='+searchValue).subscribe(result => {
    this.jokes = result["result"];
    console.log(result);
  });
}



  }

}
