import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'; 
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { environment } from 'src/environment/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AtenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }
  
  public autenticar(usuario: string, senha: string): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API}/user/login`, {
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
