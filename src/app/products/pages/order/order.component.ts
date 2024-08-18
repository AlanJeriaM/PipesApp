import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  //objetos creados con su interface en hero.interface
  public heroes: Hero[]= [
    { nombre: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
    nombre: 'Batman',
    canFly: false,
    color: Color.black
   },
   {
    nombre: 'Daredevil',
    canFly: false,
    color: Color.red
   },
   {
    nombre: 'Robin',
    canFly: false,
    color: Color.red
   },
   {
    nombre: 'Linterna Verde',
    canFly: true,
    color: Color.green
   },


  ]

  toggleUpperCase(){
    this.isUpperCase= !this.isUpperCase;

  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }


}
