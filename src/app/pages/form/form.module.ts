import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { SharedModule } from 'src/app/comps/shared.module';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ],

})
export class FormModule { }
