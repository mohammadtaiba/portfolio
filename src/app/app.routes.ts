import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage) },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.page').then((m) => m.ProjectsPage),
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills.page').then((m) => m.SkillsPage),
    },
    // {
    //     path: 'books',
    //     loadComponent: () => import('./pages/books/books.page').then((m) => m.BooksPage),
    // },
    // { path: 'cv', loadComponent: () => import('./pages/cv/cv.page').then((m) => m.CvPage) },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    },
    // {path: 'about', loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage)},
    // {path: 'impressum', loadComponent: () => import('./pages/legal/impressum.page').then(m => m.ImpressumPage)},
    // {path: 'datenschutz', loadComponent: () => import('./pages/legal/datenschutz.page').then(m => m.DatenschutzPage)},
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
    },
];
