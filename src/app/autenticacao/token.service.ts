import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public retornaToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  public saveToken(token: string){
    localStorage.setItem(KEY, token);
  }

  public excluirToken(){
    localStorage.removeItem(KEY);
  }

  public possuiToken(){
    return !!this.retornaToken();
  }
}
