import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NovoUsuarioService } from './novo-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  public usuarioExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges?.pipe(
        switchMap(
          (nomeUsuario) => this.novoUsuarioService.verificaUsuarioExitente(nomeUsuario)
        ),
        map(
          (usuarioExiste: any) => usuarioExiste?{ usuarioExistente: true }:null
        ),
        first()
      );
    };
  }

}

