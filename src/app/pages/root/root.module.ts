import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root-routing.module';
import { SharedModule } from 'src/app/comps/shared.module';
import { RootComponent } from './root.component';



@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    SharedModule
  ]
})
export class RootModule { }
