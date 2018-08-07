import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {HttpConnectorService} from '../../services/http-connector.service'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
cars:any[];
cols:any;

  constructor(private httpMod: HttpConnectorService, private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

  renderGrid(options:any){
      this.cols = options["columns"];
      this.cars = options["data"];    
  }

}
