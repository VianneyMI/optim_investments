import { NgModule } from "@angular/core";
//import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { DetailsService } from 'app/@core/services/details.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    CommonModule,
    NbDialogModule.forChild(),],
  exports: [],
  declarations: [DetailsComponent],
  entryComponents: [],
  providers: [DetailsService],
})
export class DetailsModule { }