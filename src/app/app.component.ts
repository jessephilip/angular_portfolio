import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { SkillsService } from 'app/services/skills.service';

@Component({
  animations: [
    trigger('expand', [
      state('void', style({
        opacity: '0',
        transform: 'translateY(-20%)'
      })),
      state('*', style({
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('void <=> *', animate('100ms'))
    ])
  ],
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
