import { environment } from './../../environments/environment.prod';
import { House } from 'src/app/house/models/house.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) {
  }

getHouseData(): Observable<any> {
  return this.http.get('https://www.potterapi.com/v1/houses?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy');
}
}
