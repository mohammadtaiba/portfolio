import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SectionComponent} from '../../shared/section.component';
import {CV, PROFILE} from '../../data/portfolio-data';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
    imports: [CommonModule, SectionComponent, RouterLink],
  templateUrl: './cv.page.html',
  styleUrl: './cv.page.css',
})
export class CvPage {
  cv = CV;
  profile = PROFILE;
  cvUrl = 'assets/cv.pdf';
}
