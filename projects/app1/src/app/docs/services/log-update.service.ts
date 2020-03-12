import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private _http: HttpClient) { }

  gimmeJokes() {
    return this._http.get('https://api.chucknorris.io/jokes/random');
  }
}
