import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from '../../shared/section.component';
import { PROJECTS, Project } from '../../data/portfolio-data';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, SectionComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.css',
})
export class ProjectsPage {
  all = PROJECTS;
  q = '';
  tag = 'Alle';

  get tags(): string[] {
    const set = new Set<string>();
    this.all.forEach(p => p.tags.forEach(t => set.add(t)));
    return ['Alle', ...Array.from(set).sort((a,b) => a.localeCompare(b))];
  }

  get filtered(): Project[] {
    const q = this.q.trim().toLowerCase();
    return this.all.filter(p => {
      const matchesText = !q || (p.title + ' ' + p.subtitle + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase().includes(q);
      const matchesTag = this.tag === 'Alle' || p.tags.includes(this.tag);
      return matchesText && matchesTag;
    });
  }

  setTag(t: string){ this.tag = t; }
}
