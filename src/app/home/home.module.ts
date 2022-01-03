import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
