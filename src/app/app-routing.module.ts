import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path:'', component: StartComponent},
  {path: 'result/:valor', component: ResultComponent},  //:valor me permite atrapar el valor que le pase al redirigirlo
  {path: '**', redirectTo:''} //ha de estar la última
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
