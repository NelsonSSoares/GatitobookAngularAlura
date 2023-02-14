import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent {

  formularioAnimal!: FormGroup;
  file!: File;
  preview!: string; 
  percentualConcluido = 0;

  constructor(){}

  public upload(){

  }

  public gravaArquivo(arquivo: any){

  }
}
