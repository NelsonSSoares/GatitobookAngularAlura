import { Component } from '@angular/core';
import { AtenticacaoService } from 'src/app/autenticacao/atenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario='';
  senha='';

  constructor(private authService: AtenticacaoService){}

  login(){
    
    this.authService.autenticar(this.usuario, this.senha).subscribe(()=>{
      console.log('atenticado com sucesso',);},
    (error)=>{
      console.error('Informação invallida', error);
      
    });
  }

}
