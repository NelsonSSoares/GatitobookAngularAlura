import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {

  public novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private novoUsuarioService: NovoUsuarioService){}

  ngOnInit(): void{
    this.novoUsuarioForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],  //segundo elemento do array, que é outro array é para validações em formularios reativos
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName:['',[minusculoValidator]],
      password:['']
    });
  }
  public cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
    
  }
}
