import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Operation } from '../../../../../../backend';
import { SmartTableService } from 'app/@core/services/smart-table.service';
import { from } from 'rxjs';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  public operations: Operation[];
  source: LocalDataSource;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'ID',
        type: 'number',
      },
      titreoperation: {
        title: 'Titre Operation',
        type: 'html',
      },
      ville: {
        title: 'Ville',
        type: 'string',
      },
      etat_d_avancement: {
        title: 'Etat Avancement',
        type: 'string',
      },
      enveloppe_prev_en_meu: {
        title: 'Enveloppe',
        type: 'number',
      }
    },
  };

  

  constructor(private service: SmartTableService) {
    this.source = new LocalDataSource();
    this.service.getOperations().subscribe((data) => {
      for (let i = 0; i<data.length; i++){
        data[i].titreoperation='<a href=http://localhost:4200/pages/details/'+data[i]._id+'>'+data[i].titreoperation+'</a>';
      }
      this.source.load(data);
    });
  }

  async onConfirmSave(event) {
    const operation: Operation = event.newData;
    operation.id = Math.max(...(await this.source.getAll()).map((x) => x.id)) + 1;
    this.service.createOperation(operation).subscribe((res) => {
      event.confirm.resolve(operation);
    });
  }

  onEditConfirm(event) {
 
  const operation : Operation = event.newData;
   this.service.updateOperation(operation).subscribe((res) => {
    event.confirm.resolve(operation);
  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {

      const id : number = event.data._id;
      this.service.deleteOperation(id).subscribe((res)=>{
        event.confirm.resolve(id);
      })
      
    } else {
      event.confirm.reject();
    }
  }
}
