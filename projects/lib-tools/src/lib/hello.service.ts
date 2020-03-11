import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() {
  }

  get message(): string {
    return 'Hello World!';
  }
}
