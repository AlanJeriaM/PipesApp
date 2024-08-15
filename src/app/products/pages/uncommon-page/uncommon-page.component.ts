import { Component,Input } from '@angular/core';

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

}
