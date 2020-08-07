import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from '../model/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  readonly rootURL = 'http://localhost:59485/api';

  constructor(private http: HttpClient) { }

  getColors(colorBody: any, colorHood: any, colors: any) {
    return this.http.get(this.rootURL + '/Color/' + colorBody + '/' + colorHood + '/' + colors); 
  }
  putColor(formData: Color) {
    return this.http.put(this.rootURL + '/Color/'+ formData.Id, formData);
  }
  clearColor(idB: any, idH) {
    return this.http.delete(this.rootURL + '/Color/'+ idB + '/' + idH);
  }
}
