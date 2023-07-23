
import { Component,Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DireccionesCelulas } from 'src/app/models/modelo';

@Component({
  selector: 'app-small-groups',
  templateUrl: './small-groups.component.html',
  styleUrls: ['./small-groups.component.css'],
})
export class SmallGroupsComponent {
  constructor(
    private router: Router,
  ){}

  ELEMENT_DATA: DireccionesCelulas[] = [ 
    {item: 1, name: 'Jehová Nisi', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Jesus Rojas Joya'},
    {item: 2, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 3, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 4, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 5, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 6, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 7, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 8, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 9, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 10, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
    {item: 11, name: 'Celula 2 Celula 2', address: "Jiron Arica 365", horario: "Martes de 19:00 a 21:00", lider: 'Otro Lider / Otro Lider'},
  ];

  displayedColumns: string[] = ['Item', 'Nombre', 'Direccion', 'Horario', 'Lider'];
  dataSource = new MatTableDataSource<DireccionesCelulas>(this.ELEMENT_DATA);

 
}






