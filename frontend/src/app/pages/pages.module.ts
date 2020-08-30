import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailsModule } from './details/details.module';



@NgModule({
  imports: [
    PagesRoutingModule,
    DetailsModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
