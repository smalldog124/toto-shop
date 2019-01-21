import { environment } from '../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export interface CustomerStore {
  name: string;
  position: number;
  address: number;
  line: string;
  created_time: string;
  updated_time: string;
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) { }
  getCustomerStore() {
    return this.http.get<CustomerStore[]>(environment.api_url + "customerStore")
  }
}
