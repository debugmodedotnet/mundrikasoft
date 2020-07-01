import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
