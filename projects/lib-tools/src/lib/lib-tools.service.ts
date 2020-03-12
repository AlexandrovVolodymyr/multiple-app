import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsers } from 'projects/app1/src/app/docs/interfaces/iusers';

@Injectable({
  providedIn: 'root'
})
export class LibToolsService {

  constructor() {
  }

  getUsers(): Observable<IUsers[]> {
    const users: IUsers[] = [
      {
        id: 1,
        name: 'John'
      },
      {
        id: 2,
        name: 'Jack'
      },
      {
        id: 3,
        name: 'Johnathan'
      },
      {
        id: 4,
        name: 'Michael'
      }
    ];

    return of(users);
  }
}
