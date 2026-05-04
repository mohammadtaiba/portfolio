import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionComponent } from '../../shared/section.component';
import { KI_PROJECTS, Project, WEBSITE_PROJECTS } from '../../data/portfolio-data';

type SectionKey = 'web' | 'ki';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, SectionComponent],
    templateUrl: './projects.page.html',
    styleUrl: './projects.page.css',
})
export class ProjectsPage {
    q = '';
    section: SectionKey | null = null; // null = alle Bereiche

    private applySearch(list: Project[]): Project[] {
        const q = this.q.trim().toLowerCase();
        return list.filter((p) => {
            const haystack = (
                p.title +
                ' ' +
                p.description +
                ' ' +
                p.tags.join(' ') +
                ' ' +
                (p.videoUrl ?? '')
            ).toLowerCase();
            return !q || haystack.includes(q);
        });
    }

    get filteredWebsite(): Project[] {
        return this.applySearch(WEBSITE_PROJECTS);
    }

    get filteredKi(): Project[] {
        return this.applySearch(KI_PROJECTS);
    }

    // 2 Buttons: Klick toggelt (aktiv -> wieder aus)
    setSection(s: SectionKey) {
        this.section = this.section === s ? null : s;
    }

    clearQuery() {
        this.q = '';
    }

    get noResults(): boolean {
        if (this.section === 'web') return this.filteredWebsite.length === 0;
        if (this.section === 'ki') return this.filteredKi.length === 0;

        return this.filteredWebsite.length === 0 && this.filteredKi.length === 0;
    }

    lightbox: { kind: 'image' | 'video'; url: string; title: string } | null = null;

    openLightbox(url: string | undefined, title: string, kind: 'image' | 'video' = 'image') {
        if (!url) return;
        this.lightbox = { kind, url, title };
    }

    closeLightbox() {
        this.lightbox = null;
    }
}
