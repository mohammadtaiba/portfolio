import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionComponent } from '../../shared/section.component';
import { PROFILE } from '../../data/portfolio-data';

@Component({
    standalone: true,
    imports: [CommonModule, RouterLink, SectionComponent],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css',
})
export class HomePage {
    profile = PROFILE;
}
