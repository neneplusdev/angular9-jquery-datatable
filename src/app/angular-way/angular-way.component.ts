import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-angular-way',
  templateUrl: './angular-way.component.html'
})
export class AngularWayComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.http.get<any>('https://angular-datatables-demo-server.herokuapp.com')
    .subscribe(response => {
      this.persons = response.data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
