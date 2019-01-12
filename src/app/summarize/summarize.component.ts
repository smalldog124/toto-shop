import { Component, OnInit } from '@angular/core';

export interface Transaction {
  name: string;
  cost: number;
}

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css']
})
export class SummarizeComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'cost'];
  transactionsMonday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5.8},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsTuesday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsWednesday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsThursday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsFriday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsSaturday: Transaction[] = [
    {name: 'Beach ball', cost: 4},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  transactionsSunday: Transaction[] = [
    {name: 'Beach ball', cost: 20},
    {name: 'Towel', cost: 5},
    {name: 'Frisbee', cost: 8},
    {name: 'Sunscreen', cost: 4},
    {name: 'Cooler', cost: 25},
    {name: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost(transactions:Transaction[]) {
    return transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
