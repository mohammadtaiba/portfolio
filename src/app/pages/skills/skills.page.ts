import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from '../../shared/section.component';
import {SKILL_GROUPS} from '../../data/portfolio-data';

@Component({
  standalone: true,
  imports: [CommonModule, SectionComponent],
  templateUrl: './skills.page.html',
  styleUrl: './skills.page.css',
})
export class SkillsPage {
  groups = SKILL_GROUPS;
}
