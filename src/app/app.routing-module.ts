import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', 
  anchorScrolling: 'enabled',           
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'service', component:ServiceComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
