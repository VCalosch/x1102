import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { APP_ROUTING } from './app.routes';

//Servicios
import { SelectsService } from './servicios/selects.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { CoordinadorComponent } from './componentes/coordinador/coordinador.component';
import { EscogerPlayaComponent } from './componentes/compartidos/escoger-playa/escoger-playa.component';
import { EncargadoGeneralComponent } from './componentes/compartidos/encargado-general/encargado-general.component';
import { SocorristaGeneralComponent } from './componentes/compartidos/socorrista-general/socorrista-general.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CoordinadorComponent,
    EscogerPlayaComponent,
    EncargadoGeneralComponent,
    SocorristaGeneralComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [SelectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
