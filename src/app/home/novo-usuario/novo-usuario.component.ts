import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {

  public novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
    ){}

  ngOnInit(): void{
    this.novoUsuarioForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],  //segundo elemento do array, que é outro array é para validações em formularios reativos
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:['',[minusculoValidator],[this.usuarioExistenteService.usuarioExiste()]],// terceiro elemento do array é para validações assincronas
      password:['']
    },
    {
      validators: [usuarioSenhaIguaisValidator]
    });
  }
  public cadastrar(){

    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(()=>{
        this.router.navigate(['']);
      },
      (error)=>{
        console.log(error);      
      }
      )
    }
  }
}
