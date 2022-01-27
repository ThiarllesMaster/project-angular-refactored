import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../components/account/login/login/model/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl = environment.apiBaseUrl.concat('/role')

  constructor(private http:HttpClient) { }

  getRole(): Observable<Role> {
    return this.http.get<Role>(this.baseUrl)
  }
}
