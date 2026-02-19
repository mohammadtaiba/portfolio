import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from '../../shared/section.component';
import { WEBSITE_PROJECTS, KI_PROJECTS, BACKEND_PROJECTS, Project } from '../../data/portfolio-data';

type SectionKey = 'web' | 'ki' | 'backend';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, SectionComponent],
    templateUrl: './projects.page.html',
    styleUrl: './projects.page.css',
})
export class ProjectsPage {
    all: Project[] = [...WEBSITE_PROJECTS, ...KI_PROJECTS, ...BACKEND_PROJECTS];

    q = '';
    section: SectionKey | null = null; // null = alle Bereiche

    private applySearch(list: Project[]): Project[] {
        const q = this.q.trim().toLowerCase();
        return list.filter(p => {
            const haystack = (p.title + ' ' + p.description + ' ' + p.tags.join(' ')).toLowerCase();
            return !q || haystack.includes(q);
        });
    }

    get filteredWebsite(): Project[] {
        return this.applySearch(WEBSITE_PROJECTS);
    }

    get filteredKi(): Project[] {
        return this.applySearch(KI_PROJECTS);
    }

    get filteredBackend(): Project[] {
        return this.applySearch(BACKEND_PROJECTS);
    }

    // 3 Buttons: Klick toggelt (aktiv -> wieder aus)
    setSection(s: SectionKey) {
        this.section = this.section === s ? null : s;
    }

    clearQuery() {
        this.q = '';
    }

    get noResults(): boolean {
        if (this.section === 'web') return this.filteredWebsite.length === 0;
        if (this.section === 'ki') return this.filteredKi.length === 0;
        if (this.section === 'backend') return this.filteredBackend.length === 0;

        return (
            this.filteredWebsite.length === 0 &&
            this.filteredKi.length === 0 &&
            this.filteredBackend.length === 0
        );
    }

    lightboxUrl: string | null = null;
    lightboxTitle = '';

    openLightbox(url: string | undefined, title: string) {
        if (!url) return;
        this.lightboxUrl = url;
        this.lightboxTitle = title;
    }

    closeLightbox() {
        this.lightboxUrl = null;
        this.lightboxTitle = '';
    }
}
