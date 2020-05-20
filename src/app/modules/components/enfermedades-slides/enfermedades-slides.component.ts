import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Enfermedades } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-enfermedades-slides',
  templateUrl: './enfermedades-slides.component.html',
  styleUrls: ['./enfermedades-slides.component.scss'],
})
export class EnfermedadesSlidesComponent implements OnInit {
  encabezado: any;
  enfermedades: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Devuelve -> encabezado: arrreglo & enfermedades: arreglo de objetos
    // Puede ser utilizado en el HTML
    this.dataService.getInformacionEnfermedades().subscribe((value) => {
      this.encabezado = Object.values(value)[0];
      this.encabezado = Object.values(this.encabezado);
      console.log(this.encabezado);
      let result = Object.values(value)[1];
      this.enfermedades = Object.values(result);
      this.enfermedades = Object.values(this.enfermedades);
      console.log(this.enfermedades);
    })
  }
}
