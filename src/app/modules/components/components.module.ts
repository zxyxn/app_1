import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnfermedadesSlidesComponent } from './enfermedades-slides/enfermedades-slides.component';



@NgModule({
  declarations: [EnfermedadesSlidesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EnfermedadesSlidesComponent
  ]
})
export class ComponentsModule { }
