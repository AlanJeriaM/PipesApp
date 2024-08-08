import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

 public menuitems: MenuItem[] = [];

  ngOnInit() {
      this.menuitems = [
          { label: 'Pipes de Anular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left'

            },
            {
              label: 'Números',
              icon: 'pi pi-dollar'

            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe'

            },


          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [

            {
              label: 'Otro elemento',
              icon: 'pi pi-cog'
            }
          ]
        }

      ];
  }
}
