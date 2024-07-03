import { Component } from '@angular/core';
import { PersonajesServiceComponent } from '../personajes-service/personajes-service.component';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-personajes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent {
  constructor(private ps: PersonajesServiceComponent, private router: Router){
    ps.obtenerListaPersonajes();
  }

get listado(){
  return this.ps.listaPersonajes;
}
}
