import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VybecashComponent } from './@components/vybecash/vybecash.component';
import { HomeComponent } from './@components/home/home.component';
import { AfreximComponent } from './@components/afrexim/afrexim.component';
import { OptivaComponent } from './@components/optiva/optiva.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vybe', component: VybecashComponent},
  {path: 'afrexim', component: AfreximComponent},
  {path: 'optiva', component: OptivaComponent},
  
  // {path: '**', component: NotFoundComponent},
]


@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)   
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
