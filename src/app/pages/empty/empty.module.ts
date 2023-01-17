import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { SharedModule } from 'src/app/comps/shared.module';
import { EmptyRoutingModule } from './empty-routing.module';



@NgModule({
  declarations: [EmptyComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmptyRoutingModule,
  ]
})
export class EmptyModule { }
