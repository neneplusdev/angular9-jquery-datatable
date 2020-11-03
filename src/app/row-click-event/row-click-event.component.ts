import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-click-event',
  templateUrl: './row-click-event.component.html'
})
export class RowClickEventComponent implements OnInit {
  message = '';
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
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.someClickHandler(data);
        });
        return row;
      }
    };
  }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

}
