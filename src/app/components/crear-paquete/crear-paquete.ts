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

  selectedPackageType: string | null = null;
  step: number = 1;
  selectedProducts: Producto[] = [];

  get canGoToProducts(): boolean {
    return !!this.selectedPackageType;
  }

  get canGoToCustomization(): boolean {
    return this.selectedProducts.length > 0;
  }

  selectPackageType(type: string) {
    this.selectedPackageType = type;
  }

  goToProductsStep() {
    if (this.canGoToProducts) {
      this.step = 2;
    }
  }

  goToCustomizationStep() {
    if (this.canGoToCustomization) {
      this.step = 3;
    }
  }

  toggleProductSelection(producto: Producto) {
    const idx = this.selectedProducts.findIndex(p => p.id === producto.id);
    if (idx > -1) {
      this.selectedProducts.splice(idx, 1);
    } else {
      this.selectedProducts.push(producto);
    }
  }

  isProductSelected(producto: Producto): boolean {
    return this.selectedProducts.some(p => p.id === producto.id);
  }
}
