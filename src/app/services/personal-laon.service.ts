import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalLaonService {

  constructor(private http: HttpClient) { }
  test:string ="working";

  getJsonData(): Promise<any[]> {
    return this.http.get<any[]>("https://cors-anywhere.herokuapp.com/"+'https://www.imoney.my/json/personal-loan-desktop.json').toPromise();
  }
}
