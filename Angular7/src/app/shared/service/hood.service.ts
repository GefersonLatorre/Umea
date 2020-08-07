import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hood } from '../model/hood.model';

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  readonly rootURL = 'http://localhost:59485/api';

  constructor(private http: HttpClient) { }

  getHoods() {
    return this.http.get(this.rootURL + '/Hood');
  }
  putHood(Data: Hood) {
    return this.http.put(this.rootURL + '/Hood/'+ Data.Id, Data);
  }
  clearHood(id: any) {
    return this.http.delete(this.rootURL + '/Hood/'+ id);
  }
}
