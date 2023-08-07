import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewQuizComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { UpdateQuizComponent } from './update/update.component';
import { QuizDetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: IndexComponent },
  { path: 'new', component: NewQuizComponent },
  { path: 'update/:_id', component: UpdateQuizComponent },
  { path: 'details/:_id', component: QuizDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
