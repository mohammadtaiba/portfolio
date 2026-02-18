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

    get hasActiveFilters(): boolean {
        return this.q.trim().length > 0 || this.tag !== 'Alle';
    }

    get filtered(): Project[] {
        const q = this.q.trim().toLowerCase();
        return this.all.filter(p => {
            const matchesText =
                !q || (p.title + ' ' + p.description + ' ' + p.tags.join(' '))
                    .toLowerCase()
                    .includes(q);

            const matchesTag = this.tag === 'Alle' || p.tags.includes(this.tag);
            return matchesText && matchesTag;
        });
    }

    // Klick auf denselben Tag -> Filter wird entfernt (zurück auf "Alle")
    setTag(t: string) {
        if (t === 'Alle' || t === this.tag) {
            this.tag = 'Alle';
            return;
        }
        this.tag = t;

        // Optional: Wenn du willst, dass beim Tag-Klick auch die Suche geleert wird:
        // this.q = '';
    }

    clearQuery() {
        this.q = '';
    }

    resetFilters() {
        this.q = '';
        this.tag = 'Alle';
    }
}
