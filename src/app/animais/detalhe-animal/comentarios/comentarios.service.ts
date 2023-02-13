import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Comentario, Comentarios } from './comentarios';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})

export class ComentariosService {

  constructor(private http: HttpClient) { }

  public buscaComentario(id: number): Observable<Comentarios>{
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  public incluiComentario(id:number, comment: string): Observable<Comentario>{
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, comment);
  }

}
