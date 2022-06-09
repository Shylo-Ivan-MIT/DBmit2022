import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampsListComponent } from './components/champs-list/champs-list.component';
import { ChampDetailsComponent } from './components/champ-details/champ-details.component';
import { AddChampComponent } from './components/add-champ/add-champ.component';

const routes: Routes = [
  { path: '', redirectTo: 'champs', pathMatch: 'full' },
  { path: 'champs', component: ChampsListComponent },
  { path: 'champs/:id', component: ChampDetailsComponent },
  { path: 'add', component: AddChampComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
