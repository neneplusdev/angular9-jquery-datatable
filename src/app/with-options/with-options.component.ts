import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-with-options',
  templateUrl: './with-options.component.html'
})
export class WithOptionsComponent implements OnInit {
  persons= [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log("---------------------");
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.http.get<any>("https://angular-datatables-demo-server.herokuapp.com")
    .subscribe(response => {
      console.log(" response.data ", response.data);
      this.persons = response.data;
    });
  }

}
