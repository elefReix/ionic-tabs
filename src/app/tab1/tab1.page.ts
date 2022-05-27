import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public subtitulo:string = 'estes es un ion-title';
  public somos:string = 'Somos Katiana y Jesus una pareja de ingenieros emprendedores'
  constructor() {}
  ngOnInit(): void {

    let numero = 20;
     numero =10
     debugger;
     numero +=5;
     numero = 0;
     console.log(numero);
  }

}
