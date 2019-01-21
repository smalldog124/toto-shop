import {Component, OnInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../customer.service'

export interface PeriodicElement {
  name: string;
  position: number;
  address: number;
  line: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', address: 1.0079, line: 'H'},
  {position: 23, name: 'Helium', address: 4.0026, line: 'He'},
  {position: 3, name: 'Lithium', address: 6.941, line: 'Li'},
  {position: 4, name: 'Beryllium', address: 9.0122, line: 'Be'},
  {position: 5, name: 'Boron', address: 10.811, line: 'B'},
  {position: 6, name: 'Carbon', address: 12.0107, line: 'C'},
  {position: 7, name: 'Nitrogen', address: 14.0067, line: 'N'},
  {position: 8, name: 'Oxygen', address: 15.9994, line: 'O'},
  {position: 9, name: 'Fluorine', address: 18.9984, line: 'F'},
  {position: 10, name: 'Neon', address: 20.1797, line: 'Ne'},
];
@Component({
  selector: 'app-customer-store',
  templateUrl: './customer-store.component.html',
  styleUrls: ['./customer-store.component.css']
})
export class CustomerStoreComponent {

  cutomerObservable : Observable<any>;

  constructor(private httpClient:HttpClient, private customser:CustomerService){}

  ngOnInit() {
    this.customser.getCustomerStore().subscribe((result)=>{
      console.log(result)
    });
  }

  displayedColumns: string[] = ['position', 'name', 'address', 'line'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}