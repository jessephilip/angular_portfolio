import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() use: boolean;
}
