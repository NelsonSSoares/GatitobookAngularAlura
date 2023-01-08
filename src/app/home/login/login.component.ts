import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AtenticacaoService } from 'src/app/autenticacao/atenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario='';
  senha='';

  constructor(private authService: AtenticacaoService, private router: Router){}

  login(){
    
    this.authService.autenticar(this.usuario, this.senha).subscribe(()=>{
      this.router.navigate(['animais']);
    },(error)=>{
      console.error('Informação invallida', error);
    });
  }

}
