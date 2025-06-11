import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-crear-paquete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-paquete.html',
  styleUrls: ['./crear-paquete.scss'],
})
export class CrearPaqueteComponent {
  productos$: Observable<Producto[]> = inject(ProductoService).obtenerProductos();

  showPackageTypeSelection: boolean = false;

  constructor() {
    console.log('Componente CrearPaqueteComponent ha sido creado.');
  }
}
