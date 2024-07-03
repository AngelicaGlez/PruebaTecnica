import { Routes } from '@angular/router';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

export const routes: Routes = [
    {path:"personajes", component: ListaPersonajesComponent},
    {path: "", redirectTo: "/personajes", pathMatch:"full"}
];
