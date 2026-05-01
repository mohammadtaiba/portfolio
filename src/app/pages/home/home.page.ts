import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/portfolio-data';

@Component({
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css',
})
export class HomePage {
    profile = PROFILE;
    focusIcons = ['🤖', '⚙️', '🔍', '🌐'];
}
