import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent {

  animais$!: Observable<Animais>;
  /*
    vamos declarar o atributo animais!:. Por que exclamação dois pontos? Porque eu vou instanciá-lo no ngOnInit. Como eu só estou declarando, tenho que colocar essa exclamação dois pontos, e ele vai ser do tipo Animais;.
  */

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService){}

  ngOnInit(): void{
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario)=>{
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    )
  }
}
