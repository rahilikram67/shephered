import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourComponent } from './tour/tour.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

const mods = [
  CommonModule,
  MatFormFieldModule,
  MatIconModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  RouterModule
]

@NgModule({
  declarations: [TourComponent, ToolbarComponent],
  imports: mods,
  exports: [TourComponent, ToolbarComponent, ...mods]
})
export class SharedModule { }
