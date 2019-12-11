import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Student } from '../student/models/student.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  studentHouse;

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
  updateFilter = (seacrh, dataArray) => {
    seacrh = seacrh.toLowerCase();
    const newStudents =
      dataArray.filter((p: Student) => p.name.toLowerCase().includes(seacrh));
    return newStudents;
  }
}
