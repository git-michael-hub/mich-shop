import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([]),

    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
