import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import {SkillsComponent} from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent,data: { animationState: 'One' } },
  {path:'education',component:EducationComponent, data: { animationState: 'Two' }},
  {path:'projects',component:ProjectComponent ,data: { animationState: 'Five' }},
  {path:'contact',component:ContactComponent ,data: { animationState: 'Six' }},
  {path:'skills',component:SkillsComponent, data: { animationState: 'Four' }},
  {path:'achievements',component:AchievementsComponent, data: { animationState: 'Three' }},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
