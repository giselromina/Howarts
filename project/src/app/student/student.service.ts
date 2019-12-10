import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Studentervice {

  private studentUrl = environment.baseUrl;
  private key = '?key=$2a$10$X2SCQZqUUBQNxISh9p8nWecEMBPBFZzTsgOE7aupfcuOr7HgdHnPy';
  constructor(private http: HttpClient) {
  }
  public getCharacter(id: string) {
    return this.http.get(this.studentUrl + 'characters' + id);
  }
}
