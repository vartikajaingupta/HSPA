import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties : any = [
    {
      "Id": 1,
      "Type": "House",
      "Name": "Birla House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Type": "Villa",
      "Name": "Erose House",
      "Price": 15000
    },
    {
      "Id": 3,
      "Type": "Mansion",
      "Name": "Singh Mansion",
      "Price": 25000
    },
    {
      "Id": 4,
      "Type": "House",
      "Name": "Mittal House",
      "Price": 20000
    },
    {
      "Id": 5,
      "Type": "Villa",
      "Name": "Gupta Villa",
      "Price": 22000
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
