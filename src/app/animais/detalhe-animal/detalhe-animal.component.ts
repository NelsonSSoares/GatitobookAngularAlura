import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})

export class DetalheAnimalComponent {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOninit(): void{
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  public curtir(){
    this.animaisService.curtir(this.animalId)
    .subscribe((curtida)=>{
      if(curtida){
        this.animal$ = this.animaisService.buscaPorId(this.animalId)
      }
    })
  }

  public excluir(){
    this.animaisService.excluirAnimal(this.animalId)
    .subscribe(()=>{
      this.router.navigate(['/animais/'])
    },
    (error)=>{
      console.log(error);
      
    })
  }
}
