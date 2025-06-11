import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { CrearPaqueteComponent } from "./components/crear-paquete/crear-paquete";

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "crear-paquete",
    component: CrearPaqueteComponent,
  },
];
