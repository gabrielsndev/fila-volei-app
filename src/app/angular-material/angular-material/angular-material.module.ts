import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule

  ],
  exports: [
  MatSlideToggleModule,
  MatDividerModule,
  MatButtonModule
  ]
})
export class AngularMaterialModule { }
