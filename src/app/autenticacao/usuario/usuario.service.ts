import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService: TokenService) {
      if(this.tokenService.possuiToken()){
        this.decodificaJWT();
      }
   }

  private decodificaJWT(){

    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Usuario;

    this.usuarioSubject.next(usuario);
  }

  public retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  public salvaToken(token: string){
    this.tokenService.saveToken(token);
    this.decodificaJWT();
  }
  
  public logOut(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }
  public estaLogado(){
    return this.tokenService.possuiToken();
  }
}
