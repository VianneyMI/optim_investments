import { Component, Inject, OnInit } from '@angular/core';
import { LocalDataSource } from "ng2-smart-table";
import { DetailsService } from 'app/@core/services/details.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Operation } from '../../../../../backend';


@Component({
  selector: 'ngx-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html',
})


export class DetailsComponent implements OnInit {
    
    public operation:Operation;
    // private service:DetailsService;
    // private route: ActivatedRoute;
    source: LocalDataSource;
    id:string;

    ngOnInit() {
        // this.route.paramMap.subscribe(params => {
        //   this.id = params.get("_id");
        //   console.log(this.id);
        // })
      }
      
    constructor(private service: DetailsService, private route:ActivatedRoute) {
        this.source = new LocalDataSource();
        this.route.paramMap.subscribe(params => {
            this.id = params.get("_id");
            console.log(this.id);
            console.log(this.id);
            this.service.getOperation(this.id).subscribe((data)=>{
                //this.source.load(data);
                console.log(data);
                this.operation=data;
                console.log(this.operation);
            })
          })

      }
      
    
//     starRate = 2;
//   heartRate = 4;
//   radioGroupValue = 'Test Proof';
}