import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SistemaAddComponent } from './sistema-add/sistema-add.component';
import { SistemaUpdateComponent } from './sistema-update/sistema-update.component';
import { SistemaGetComponent } from './sistema-get/sistema-get.component';
import { InstituicaoAddComponent } from './instituicao-add/instituicao-add.component';
import { InstituicaoUpdateComponent } from './instituicao-update/instituicao-update.component';
import { InstituicaoGetComponent } from './instituicao-get/instituicao-get.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SistemaAddComponent,
    SistemaUpdateComponent,
    SistemaGetComponent,
    InstituicaoAddComponent,
    InstituicaoUpdateComponent,
    InstituicaoGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
