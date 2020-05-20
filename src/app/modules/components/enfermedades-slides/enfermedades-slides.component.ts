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
  enfermedades: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.getInformacionEnfermedades().subscribe((value) => {
      this.enfermedades = Object.keys(value)
      console.log(this.enfermedades);
      console.log();

    })
  }
  
}
