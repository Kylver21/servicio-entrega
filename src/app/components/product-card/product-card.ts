import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  imports: [],
  templateUrl: "./product-card.html",
  styleUrl: "./product-card.scss",
})
export class ProductCard {
  @Input() nombre!: string;
  @Input() imagenUrl!: string;
  @Input() precio!: number;
}
