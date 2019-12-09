import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) {
  }

getHouseData(): Observable<any> {
  return this.http.get('https://www.potterapi.com/v1/houses?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy');
}
getMembersHouse(): Observable<any> {
  return this.http.get('https://www.potterapi.com/v1/characters?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy');
}
}
