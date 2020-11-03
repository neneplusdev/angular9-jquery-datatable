import { Component, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html'
})
export class CustomFilterComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  datatableElement: DataTableDirective;
  min: number;
  max: number;

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

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

  ngOnDestroy(): void {
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
