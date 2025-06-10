import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/producto.model";

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  private http = inject(HttpClient);
  private productosUrl = "assets/productos.json";

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }
}
