import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot([
  {path: 'contact-me', component:ContactMeComponent},
  {path:'resume', component:ResumeComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
