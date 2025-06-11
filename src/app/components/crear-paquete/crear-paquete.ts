import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-paquete',
  standalone: true,
  imports: [
  CommonModule,

  ],
  templateUrl: './crear-paquete.html',
  styleUrls: ['./crear-paquete.scss'],
})
export class CrearPaqueteComponent {

  showPackageTypeSelection: boolean = false;

  constructor() {
    console.log('Componente CrearPaqueteComponent ha sido creado.');
  }

}
