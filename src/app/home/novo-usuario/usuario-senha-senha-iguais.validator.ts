import { FormGroup } from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
    const userName = formGroup.get('userName')?.value ?? ''; // operador ??se o valor for undefined ele insere o elemento a direita, no caso ''
    const password = formGroup.get('password')?.value ?? '';

    if(userName.trim() + password.trim()){
        return userName != password ? null : {senhaIgualUsuario: true}
    }else{
        return null
    }
}