import { Component,Input } from '@angular/core';
import { Observable, interval,tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18n Select

  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.name === 'Fernando') {
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Fernando';
      this.gender = 'male';
    }
  }

 //i18n Plural
  public client: string[] =['Maria','Pedro','Fernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient(){
    this.client.shift();
  }


  //keyValuePipe

  public persona = {
    nombre: 'Alan',
    edad: 36,
    direccion: 'San Antonio, Chile',
  }

  //AsyncPipe

  //obervable que cada 2 segundos genera numeros
  public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(value=> console.log('tap',value))
  )

  //promesa
  public promiseValue: Promise<string> = new Promise((resolve,reject)=> {
    setTimeout(() =>{
      resolve('tenemos data en la promesa');
      console.log('tenemos data en la promesa');
      this.persona.nombre = 'otro nombree'

  },3500);

})

}
