import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../model/Grupo';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  grupo: Grupo = new Grupo()
  nome = environment.nomeUsuario
  foto = environment.urlImagemUsuario
  
  constructor(
    private router: Router,
    private grupoService: GrupoService,
  ) { }

  ngOnInit() { 
   }

  cadastrar(){
    this.grupoService.postGrupo(this.grupo).subscribe((resp:Grupo) =>{
      this.grupo = resp
      alert("Grupo criadoo uhuuul!")
      this.grupo= new Grupo()
    })

  }

}
