import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, Observable, throwError, of } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.apiURL;
const NOT_MODIFIRD = 304;

@Injectable({
  providedIn: 'root'
})

export class AnimaisService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  public listaDoUsuario(nomeUsuario: string): Observable<Animais>{

    


    return this.http.get<Animais>(`${API}/${nomeUsuario}/photos`);
  }

  public buscaPorId(id: number):Observable<Animal>{
    


    return this.http.get<Animal>(`${API}/photos/${id}`);
  }

  public excluirAnimal(id: number): Observable<Animal>{
    return this.http.delete<Animal>(`${API}/photos/${id}`);
  }

  public curtir(id: number):Observable<boolean>{
    return this.http.post(`${API}/photos/${id}/like`,{}, {observe:'response'})
    .pipe(
      mapTo(true),
      catchError((error)=>{
        return error.status === NOT_MODIFIRD ? of(false) : throwError(error);
      })
    );
  }
}
