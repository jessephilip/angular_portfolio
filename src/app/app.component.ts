import { Component } from '@angular/core';
import { SkillsService } from 'app/services/skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public skills;

  constructor (private skillsService: SkillsService) {
    this.skills = this.skillsService.skills;
  }
}
