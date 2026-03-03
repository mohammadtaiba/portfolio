import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '../../shared/section.component';
import { PROFILE } from '../../data/portfolio-data';

@Component({
    standalone: true,
    imports: [CommonModule, SectionComponent],
    templateUrl: './about.page.html',
    styleUrl: './about.page.css',
})
export class AboutPage {
    profile = PROFILE;
}
