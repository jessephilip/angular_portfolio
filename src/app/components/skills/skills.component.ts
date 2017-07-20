import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills;

  constructor (private skillsService: SkillsService) {
    this.skills = this.skillsService.skills;
  }

  ngOnInit(): void {}

}
