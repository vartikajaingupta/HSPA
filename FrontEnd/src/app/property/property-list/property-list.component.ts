import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Array<IProperty>;

  constructor(private HousingService : HousingService) { }

  ngOnInit(): void {
    this.HousingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
