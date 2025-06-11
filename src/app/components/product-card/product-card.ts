import { Component, Input } from "@angular/core";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: "app-product-card",
  imports: [],
  templateUrl: "./product-card.html",
  styleUrls: ["./product-card.scss"],
})
export class ProductCard {
  @Input() nombre!: string;
  @Input() imagenUrl!: string;
  @Input() precio!: number;
}
