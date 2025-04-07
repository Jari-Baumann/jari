import { Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: 'aboutme',
        title: 'About Me',
        component: AboutMeComponent
    },
    {
        path: '**',
        redirectTo: 'aboutme'
    }
];
