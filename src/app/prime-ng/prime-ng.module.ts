import { NgModule } from '@angular/core';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule,






  ]
})
export class PrimeNgModule { }
