import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseUrl = environment.baseUrl;
   private key = '?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy';
  constructor(private http: HttpClient) {
  }
public getHouseData(): Observable<any> {
  return this.http.get(this.houseUrl + 'houses' + this.key);
}

public getMembersHouse(): Observable<any> {
  return this.http.get(this.houseUrl + 'characters' + this.key);
}
// getHouseData(): Observable<any> {
//   return this.http.get('https://www.potterapi.com/v1/houses?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy');
// }
// getMembersHouse(): Observable<any> {
//   return this.http.get('https://www.potterapi.com/v1/characters?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy');
// }
}
