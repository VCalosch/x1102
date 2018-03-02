import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/compartidos/navbar/navbar.component';
import { FooterComponent } from './componentes/compartidos/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { CoordinadorComponent } from './componentes/coordinador/coordinador.component';
import { EscogerPlayaComponent } from './componentes/compartidos/escoger-playa/escoger-playa.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'coordinador', component: CoordinadorComponent },
  { path: 'escogerPlaya', component: EscogerPlayaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
