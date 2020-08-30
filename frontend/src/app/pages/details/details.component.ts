import { Component, Inject } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { DetailsService } from 'app/@core/services/details.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Operation } from '../../../../../backend';


@Component({
  selector: 'ngx-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
    public operation:Operation;
    source: LocalDataSource;
    id:string;
    constructor(private service: DetailsService, private route:ActivatedRoute) {
        this.source = new LocalDataSource();
        this.route.queryParams.subscribe((queryParams:Params)=>{
            this.id=queryParams['_id'];
            console.log(this.id);
        })

      }
    
//     starRate = 2;
//   heartRate = 4;
//   radioGroupValue = 'Test Proof';
}