import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(user: string) {
    return this.httpClient.get('https://api.github.com/search/users?q='+user);
  }
}
