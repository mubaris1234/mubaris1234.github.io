import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import {SkillsComponent} from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'education',component:EducationComponent},
  {path:'projects',component:ProjectComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
