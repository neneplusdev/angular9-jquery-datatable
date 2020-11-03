import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-ajax',
  templateUrl: './with-ajax.component.html'
})
export class WithAjaxComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'https://angular-datatables-demo-server.herokuapp.com',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }

}
