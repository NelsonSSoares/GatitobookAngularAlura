import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AtenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }
  
  public autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: usuario,
      password: senha
    },
    {
      observe: 'response'
    }
    ).pipe(
      tap((reponse)=>{
        const authToken= reponse.headers.get('x-access-token') ??  '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
