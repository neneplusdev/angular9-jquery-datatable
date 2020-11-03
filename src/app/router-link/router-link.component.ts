import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html'
})
export class RouterLinkComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  constructor(
    private renderer: Renderer2, 
    private router: Router
  ) { }

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
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return 'View';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      console.log(" --- ", event.target.getAttribute("view-person-id"));
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
      }
    });
  }
}
