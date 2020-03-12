import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'projects/app1/src/app/docs/interfaces/iusers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users: IUsers[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
