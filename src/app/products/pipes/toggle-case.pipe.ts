import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

//lo que vamos a hacer por ahora
//fernando = FERNANDO
//FERNANDO = fernando
// transformaremos la data de minuscula a mayusculas y alreves como una especie de uppercase pero con nuestras formas.

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false):string {

    return ( toUpper )
    ? value.toUpperCase()
    : value.toLowerCase();


  }
}
