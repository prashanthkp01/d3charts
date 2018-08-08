import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {HttpConnectorService} from '../../shared/services/http-connector.service';
import {GridComponent} from '../../shared/components/grid/grid.component';
import { AuthService } from "../../shared/services/auth.service";


export interface gridModel {
    vin:string;
    year:string;
    brand:string;
    color:string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
data:gridModel[];
cols:any;
  
@ViewChild(GridComponent) grid: GridComponent;
  constructor(private httpMod: HttpConnectorService, private route: ActivatedRoute, private authService:AuthService) { }

  ngOnInit() {
   this.route.data.subscribe((data) => {
      this.authService.authToken = data.token;
      console.log(this.authService.authToken);
      this.renderGrid();
    }); 
   
  }

  renderGrid(){
     this.httpMod.getRequest('assets/models/cars.json').subscribe(response=>{     
      this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
      this.data = response["data"];
      this.grid.renderGrid({"columns": this.cols, "data":this.data});
    });
  }

}
