import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkillComponent } from './components/skill/skill.component';

import { SkillsService } from './services/skills.service';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
