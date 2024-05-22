import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CdsComponent } from './cds/cds.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cds',
    pathMatch: 'full',
  },
  {
    path: 'cds',
    component: CdsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
