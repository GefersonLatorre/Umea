import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Body } from '../model/body.model';

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  readonly rootURL = 'http://localhost:59485/api';

  constructor(private http: HttpClient) { }

  getBodies() {
    return this.http.get(this.rootURL + '/Body');
  }
  putBody(Data: Body) {
    return this.http.put(this.rootURL + '/Body/'+ Data.Id, Data);
  }
  clearBody(id: any) {
    return this.http.delete(this.rootURL + '/Body/'+ id);
  }
}
