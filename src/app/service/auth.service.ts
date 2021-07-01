import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginUsuario } from '../model/LoginUsuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(loginUsuario: LoginUsuario): Observable<LoginUsuario>{
    return this.http.post<LoginUsuario>('http://localhost:8080/usuario/logar', loginUsuario)
  }

  cadastrar (usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar',usuario)
  }

  logado(){
    let ok: boolean = false

    if(environment.tokenUsuario != ""){
      ok = true
    }
    return ok 
  }
  
}
