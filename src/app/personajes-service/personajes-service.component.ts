import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn:'root'
})
export class PersonajesServiceComponent {
  public urlConsumirApi: string= "https://hp-api.onrender.com/api/characters";
  public listaPersonajes: any[];
  public personaje: any;

  constructor(private http:HttpClient, private router:Router){
    this.listaPersonajes=[];
  }

  obtenerListaPersonajes(): void{
    this.http.get(this.urlConsumirApi).subscribe((respuesta:any) =>{
      console.log(respuesta);
      this.listaPersonajes=respuesta;
    });
  }

}
