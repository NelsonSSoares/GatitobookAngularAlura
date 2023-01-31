import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  public cadastraNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpClient.post(`${API}/user/signup`,novoUsuario);
  }

  public verificaUsuarioExitente(nomeUsuario: string){
    return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`);
  }
}

