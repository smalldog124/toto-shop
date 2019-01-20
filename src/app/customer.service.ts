import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export interface CustomerStore{
  name: string;
  position: number;
  address: number;
  line: string;
  created_time:string;
  updated_time:string;
}

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  host = "http://localhost:3000/api/v1/"

  constructor(private http:HttpClient) { }
  getCustomerStore(){
    return this.http.get<CustomerStore[]>(this.host+"customerStore")
  }
}
