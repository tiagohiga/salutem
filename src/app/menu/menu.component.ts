import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  divVisivel = true
  buscaVisivel = false

  constructor() { }

  ngOnInit(): void {
  }

  mostrarBusca(){
    this.divVisivel = false
    this.buscaVisivel = true
  }

  esconderPesquisa(){
    this.divVisivel = true
    this.buscaVisivel = false
  }

}
